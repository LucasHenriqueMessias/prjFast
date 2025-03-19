import { Controller, Post, UploadedFile, UseInterceptors, Body, Get, Param, NotFoundException, Res, Delete, Header } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { TabUploadService } from './tab_upload.service';
import { diskStorage } from 'multer';
import { extname, join } from 'path';
import { CreateTabUploadDto } from './dto/create-tab_upload.dto';
import { Response } from 'express';
import { existsSync, mkdirSync } from 'fs';
import { Public } from 'src/auth/public.decorator';

@Controller('tab-upload')
export class TabUploadController {
  constructor(private readonly tabUploadService: TabUploadService) {}

  @Post('file')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: (req, file, cb) => {
        const uploadPath = './uploads';
        if (!existsSync(uploadPath)) {
          mkdirSync(uploadPath, { recursive: true });
        }
        cb(null, uploadPath);
      },
      filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, `${file.fieldname}-${uniqueSuffix}${extname(file.originalname)}`);
      }
    })
  }))
  async uploadFile(@UploadedFile() file: Express.Multer.File, @Body() createTabUploadDto: CreateTabUploadDto) {
    if (!file) {
      throw new NotFoundException('File not found');
    }
    createTabUploadDto.filePath = file.path; // Preencher automaticamente o campo filePath
    return this.tabUploadService.saveFile(file, createTabUploadDto);
  }

  @Get('file')
  async listFiles() {
    const files = await this.tabUploadService.findAll();
    return files.map(file => ({
      id: file.id,
      name: file.name,
      description: file.description,
      filePath: file.filePath,
      tipoArquivo: file.tipoArquivo,
      usuario: file.usuario,
    }));
  }

  @Get('count-files')
  async countFile(){
    return this.tabUploadService.getCountFerramentasUsuario();
  }

  @Get('file/:id')
  async getFile(@Param('id') id: string, @Res() res: Response) {
    const tabUpload = await this.tabUploadService.findOne(+id);
    if (!tabUpload) {
      throw new NotFoundException('File not found');
    }
    const filePath = join(process.cwd(), tabUpload.filePath);
    return res.sendFile(filePath);
  }

  @Get('file/tipo/:tipoArquivo')
  async listFilesByTipo(@Param('tipoArquivo') tipoArquivo: string) {
    const files = await this.tabUploadService.findByTipo(tipoArquivo);
    return files.map(file => ({
      id: file.id,
      name: file.name,
      description: file.description,
      filePath: file.filePath,
      usuario: file.usuario,
    }));
  }

  @Delete('file/:id')
  async removeFile(@Param('id') id: string) {
    await this.tabUploadService.remove(+id);
    return { message: 'File removed successfully' };
  }

  @Get('file/download/:id')
  @Header('Content-Disposition', 'attachment')
  async downloadFile(@Param('id') id: string, @Res() res: Response) {
    const tabUpload = await this.tabUploadService.findOne(+id);
    if (!tabUpload) {
      throw new NotFoundException('File not found');
    }
    const filePath = join(process.cwd(), tabUpload.filePath);
    const fileExtension = extname(filePath).toLowerCase();

    if (fileExtension === '.xlsx') {
      res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    } else if (fileExtension === '.pdf') {
      res.setHeader('Content-Type', 'application/pdf');
    } else if (fileExtension === '.jpg' || fileExtension === '.jpeg') {
      res.setHeader('Content-Type', 'image/jpeg');
    } else if (fileExtension === '.png') {
      res.setHeader('Content-Type', 'image/png');
    } else if (fileExtension === '.gif') {
      res.setHeader('Content-Type', 'image/gif');
    } else {
      throw new NotFoundException('File type not supported');
    }

    return res.download(filePath);
  }
}