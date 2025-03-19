import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTabFerramentaDto } from './dto/create-tab_ferramenta.dto';
import { UpdateTabFerramentaDto } from './dto/update-tab_ferramenta.dto';
import { TabFerramenta } from './entities/tab_ferramenta.entity';

@Injectable()
export class TabFerramentasService {
  constructor(
    @InjectRepository(TabFerramenta)
    private readonly tabFerramentaRepository: Repository<TabFerramenta>,
  ) {}

  async create(createTabFerramentaDto: CreateTabFerramentaDto): Promise<TabFerramenta> {
    const tabFerramenta = this.tabFerramentaRepository.create(createTabFerramentaDto);
    return this.tabFerramentaRepository.save(tabFerramenta);
  }

  async findAll(): Promise<TabFerramenta[]> {
    return this.tabFerramentaRepository.find();
  }

  async findOne(id: number): Promise<TabFerramenta> {
    return this.tabFerramentaRepository.findOne({ where: { id } });
  }

  async update(id: number, updateTabFerramentaDto: UpdateTabFerramentaDto): Promise<TabFerramenta> {
    await this.tabFerramentaRepository.update(id, updateTabFerramentaDto);
    return this.tabFerramentaRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.tabFerramentaRepository.delete(id);
  }
}