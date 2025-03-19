import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CursosPerguntasService } from './cursos_perguntas.service';
import { CreateCursosPerguntaDto } from './dto/create-cursos_pergunta.dto';
import { UpdateCursosPerguntaDto } from './dto/update-cursos_pergunta.dto';
import { Public } from 'src/auth/public.decorator';

@Controller('cursos-perguntas')
export class CursosPerguntasController {
  constructor(private readonly cursosPerguntasService: CursosPerguntasService) {}

  @Public()
  @Post()
  create(@Body() createCursosPerguntaDto: CreateCursosPerguntaDto) {
    return this.cursosPerguntasService.create(createCursosPerguntaDto);
  }

  @Public()
  @Get()
  findAll() {
    return this.cursosPerguntasService.findAll();
  }

  @Public()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cursosPerguntasService.findOne(id);
  }

  @Public()
  @Get('curso/:videoaula')
  findVideoAula(@Param('videoaula') videoaula: string) {
    return this.cursosPerguntasService.findVideoAula(videoaula);
  }

  @Public()
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCursosPerguntaDto: UpdateCursosPerguntaDto) {
    return this.cursosPerguntasService.update(id, updateCursosPerguntaDto);
  }

  @Public()
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cursosPerguntasService.remove(id);
  }
}
