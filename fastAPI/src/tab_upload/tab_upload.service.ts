import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TabUpload } from './entities/tab_upload.entity';
import { CreateTabUploadDto } from './dto/create-tab_upload.dto';
import { UpdateTabUploadDto } from './dto/update-tab_upload.dto';

@Injectable()
export class TabUploadService {
  constructor(
    @InjectRepository(TabUpload)
    private tabUploadRepository: Repository<TabUpload>,
  ) {}

  async create(createTabUploadDto: CreateTabUploadDto): Promise<TabUpload> {
    const tabUpload = this.tabUploadRepository.create(createTabUploadDto);
    return this.tabUploadRepository.save(tabUpload);
  }

  async findAll(): Promise<TabUpload[]> {
    return this.tabUploadRepository.find();
  }

  async findOne(id: number): Promise<TabUpload> {
    const tabUpload = await this.tabUploadRepository.findOne({ where: { id } });
    if (!tabUpload) {
      throw new NotFoundException(`Record with ID ${id} not found`);
    }
    return tabUpload;
  }

  async update(id: number, updateTabUploadDto: UpdateTabUploadDto): Promise<TabUpload> {
    await this.tabUploadRepository.update(id, updateTabUploadDto);
    const updatedTabUpload = await this.tabUploadRepository.findOne({ where: { id } });
    if (!updatedTabUpload) {
      throw new NotFoundException(`Record with ID ${id} not found`);
    }
    return updatedTabUpload;
  }

  async remove(id: number): Promise<void> {
    const result = await this.tabUploadRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Record with ID ${id} not found`);
    }
  }

  async saveFile(file: Express.Multer.File, createTabUploadDto: CreateTabUploadDto): Promise<TabUpload> {
    const tabUpload = this.tabUploadRepository.create({
      ...createTabUploadDto,
      filePath: file.path, // Ensure the file path is saved correctly
    });
    return this.tabUploadRepository.save(tabUpload);
  }

  async findByTipo(tipoArquivo: string): Promise<TabUpload[]> {
    return this.tabUploadRepository.find({ where: { tipoArquivo } });
  }

  async saveXlsxFile(file: Express.Multer.File, createTabUploadDto: CreateTabUploadDto): Promise<TabUpload> {
    const tabUpload = this.tabUploadRepository.create({
      ...createTabUploadDto // Salva o caminho do arquivo XLSX
    });
    return this.tabUploadRepository.save(tabUpload);
  }

  async findAllXlsx(): Promise<TabUpload[]> {
    return this.tabUploadRepository.find({ where: { tipoArquivo: 'xlsx' } });
  }

  async findOneXlsx(id: number){
    const tabUpload = await this.tabUploadRepository.findOne({ where: { id, tipoArquivo: 'xlsx' } });
    if (!tabUpload) {
      throw new NotFoundException(`Record with ID ${id} not found`);
    }
    return tabUpload;
  }

  async findByTipoXlsx(tipoArquivo: string): Promise<TabUpload[]> {
    return this.tabUploadRepository.find({ where: { tipoArquivo } });
  }

  async removeXlsx(id: number): Promise<void> {
    const result = await this.tabUploadRepository.delete({ id, tipoArquivo: 'xlsx' });
    if (result.affected === 0) {
      throw new NotFoundException(`Record with ID ${id} not found`);
    }
  }


  async getCountFerramentasUsuario(): Promise<TabUpload[]> {
    return await this.tabUploadRepository.createQueryBuilder('tab_upload')
    .select('tab_upload.usuario', 'usuario')
    .addSelect('COUNT(tab_upload.usuario)', 'count')
    .groupBy('tab_upload.usuario')
    .getRawMany();
  }
}