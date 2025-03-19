import { Injectable } from '@nestjs/common';
import { CreateCursosRespostaDto } from './dto/create-cursos_resposta.dto';
import { UpdateCursosRespostaDto } from './dto/update-cursos_resposta.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CursosResposta } from './entities/cursos_resposta.entity';

@Injectable()
export class CursosRespostasService {
  constructor(
    @InjectRepository(CursosResposta)
    private cursosRespostaRepository: Repository<CursosResposta>,
  ) {}

  async create(createCursosRespostaDto: CreateCursosRespostaDto): Promise<CursosResposta> {
    const cursosResposta = this.cursosRespostaRepository.create(createCursosRespostaDto);
    return await this.cursosRespostaRepository.save(cursosResposta);
  }

  async findAll(): Promise<CursosResposta[]> {
    return await this.cursosRespostaRepository.find();
  }

  async findOne(id: string): Promise<CursosResposta> {
    return await this.cursosRespostaRepository.findOne({ where: { id } });
  }

  async update(id: string, updateCursosRespostaDto: UpdateCursosRespostaDto): Promise<CursosResposta> {
    await this.cursosRespostaRepository.update(id, updateCursosRespostaDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.cursosRespostaRepository.delete(id);
  }
}
