import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CursosRespostasService } from './cursos_respostas.service';
import { CreateCursosRespostaDto } from './dto/create-cursos_resposta.dto';
import { UpdateCursosRespostaDto } from './dto/update-cursos_resposta.dto';
import { Public } from 'src/auth/public.decorator';

@Controller('cursos-respostas')
export class CursosRespostasController {
  constructor(private readonly cursosRespostasService: CursosRespostasService) {}

  @Public()
  @Post()
  create(@Body() createCursosRespostaDto: CreateCursosRespostaDto) {
    return this.cursosRespostasService.create(createCursosRespostaDto);
  }

  @Public()
  @Get()
  findAll() {
    return this.cursosRespostasService.findAll();
  }

  @Public()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cursosRespostasService.findOne(id);
  }

  @Public()
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCursosRespostaDto: UpdateCursosRespostaDto) {
    return this.cursosRespostasService.update(id, updateCursosRespostaDto);
  }

  @Public()
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cursosRespostasService.remove(id);
  }
}
