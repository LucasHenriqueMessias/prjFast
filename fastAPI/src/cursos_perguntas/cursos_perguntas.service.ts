import { Injectable } from '@nestjs/common';
import { CreateCursosPerguntaDto } from './dto/create-cursos_pergunta.dto';
import { UpdateCursosPerguntaDto } from './dto/update-cursos_pergunta.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CursosPergunta } from './entities/cursos_pergunta.entity';
import { CursosResposta } from '../cursos_respostas/entities/cursos_resposta.entity';

@Injectable()
export class CursosPerguntasService {
  constructor(
    @InjectRepository(CursosPergunta)
    private cursosPerguntaRepository: Repository<CursosPergunta>,
  ) {}

  async create(createCursosPerguntaDto: CreateCursosPerguntaDto): Promise<CursosPergunta> {
    const cursosPergunta = this.cursosPerguntaRepository.create(createCursosPerguntaDto);
    return await this.cursosPerguntaRepository.save(cursosPergunta);
  }

  async findAll(): Promise<CursosPergunta[]> {
    return await this.cursosPerguntaRepository.find({
      relations: ['respostas'],
    });
  }

  async findOne(id: string): Promise<CursosPergunta> {
    return await this.cursosPerguntaRepository.findOne({
      where: { id },
      relations: ['respostas'],
    });
  }

  async findVideoAula(videoaula: string): Promise<CursosPergunta[]> {
    return await this.cursosPerguntaRepository.find({
      where: { videoaula },
      relations: ['respostas'],
    });
  }

  async update(id: string, updateCursosPerguntaDto: UpdateCursosPerguntaDto): Promise<CursosPergunta> {
    await this.cursosPerguntaRepository.update(id, updateCursosPerguntaDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.cursosPerguntaRepository.delete(id);
  }
}
