import { Injectable } from '@nestjs/common';
import { CreateTabEventoDto } from './dto/create-tab_evento.dto';
import { UpdateTabEventoDto } from './dto/update-tab_evento.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TabEvento } from './entities/tab_evento.entity';

@Injectable()
export class TabEventoService {
  constructor(
    @InjectRepository(TabEvento)
    private tabEventoRepository: Repository<TabEvento>,
  ) {}

  async create(createTabEventoDto: CreateTabEventoDto): Promise<TabEvento> {
    const tabEvento = this.tabEventoRepository.create(createTabEventoDto);
    return this.tabEventoRepository.save(tabEvento);
  }

  async findAll(): Promise<TabEvento[]> {
    return this.tabEventoRepository.find();
  }

  async findOne(id: string): Promise<TabEvento> {
    return this.tabEventoRepository.findOne({where: {id}});
  }

  async update(id: string, updateTabEventoDto: UpdateTabEventoDto): Promise<TabEvento> {
    await this.tabEventoRepository.update(id, updateTabEventoDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.tabEventoRepository.delete(id);
  }
}
