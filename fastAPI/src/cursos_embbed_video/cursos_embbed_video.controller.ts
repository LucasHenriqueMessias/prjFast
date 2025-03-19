import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CursosEmbbedVideoService } from './cursos_embbed_video.service';
import { CreateCursosEmbbedVideoDto } from './dto/create-cursos_embbed_video.dto';
import { UpdateCursosEmbbedVideoDto } from './dto/update-cursos_embbed_video.dto';
import { Public } from 'src/auth/auth.guard';

@Controller('cursos-embbed-video')
export class CursosEmbbedVideoController {
  constructor(private readonly cursosEmbbedVideoService: CursosEmbbedVideoService) {}

  @Public()
  @Post()
  create(@Body() createCursosEmbbedVideoDto: CreateCursosEmbbedVideoDto) {
    return this.cursosEmbbedVideoService.create(createCursosEmbbedVideoDto);
  }

  @Public()
  @Get()
  findAll() {
    return this.cursosEmbbedVideoService.findAll();
  }

  @Public()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cursosEmbbedVideoService.findOne(id);
  }

  @Public()
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCursosEmbbedVideoDto: UpdateCursosEmbbedVideoDto) {
    return this.cursosEmbbedVideoService.update(id, updateCursosEmbbedVideoDto);
  }

  @Public()
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cursosEmbbedVideoService.remove(id);
  }
}
