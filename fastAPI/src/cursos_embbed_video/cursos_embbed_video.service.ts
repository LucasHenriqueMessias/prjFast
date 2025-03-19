import { Injectable } from '@nestjs/common';
import { CreateCursosEmbbedVideoDto } from './dto/create-cursos_embbed_video.dto';
import { UpdateCursosEmbbedVideoDto } from './dto/update-cursos_embbed_video.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CursosEmbbedVideo } from './entities/cursos_embbed_video.entity';

@Injectable()
export class CursosEmbbedVideoService {
  constructor(
    @InjectRepository(CursosEmbbedVideo)
    private readonly cursosEmbbedVideoRepository: Repository<CursosEmbbedVideo>,
  ) {}

  async create(createCursosEmbbedVideoDto: CreateCursosEmbbedVideoDto): Promise<CursosEmbbedVideo> {
    const cursosEmbbedVideo = this.cursosEmbbedVideoRepository.create(createCursosEmbbedVideoDto);
    return await this.cursosEmbbedVideoRepository.save(cursosEmbbedVideo);
  }

  async findAll(): Promise<CursosEmbbedVideo[]> {
    return await this.cursosEmbbedVideoRepository.find();
  }

  async findOne(id: string): Promise<CursosEmbbedVideo> {
    return await this.cursosEmbbedVideoRepository.findOne({ where: { id } });
  }

  async update(id: string, updateCursosEmbbedVideoDto: UpdateCursosEmbbedVideoDto): Promise<CursosEmbbedVideo> {
    await this.cursosEmbbedVideoRepository.update(id, updateCursosEmbbedVideoDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.cursosEmbbedVideoRepository.delete(id);
  }
}
