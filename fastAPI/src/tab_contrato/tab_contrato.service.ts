import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTabContratoDto } from './dto/create-tab_contrato.dto';
import { UpdateTabContratoDto } from './dto/update-tab_contrato.dto';
import { TabContrato } from './entities/tab_contrato.entity';

@Injectable()
export class TabContratoService {
  constructor(
    @InjectRepository(TabContrato)
    private readonly tabContratoRepository: Repository<TabContrato>,
  ) {}

  async create(createTabContratoDto: CreateTabContratoDto): Promise<TabContrato> {
    const tabContrato = this.tabContratoRepository.create(createTabContratoDto);
    return await this.tabContratoRepository.save(tabContrato);
  }

  async findAll(): Promise<TabContrato[]> {
    return await this.tabContratoRepository.find();
  }

  async findOne(id: number): Promise<TabContrato> {
    return await this.tabContratoRepository.findOne({where: {id}});
  }

  async update(id: number, updateTabContratoDto: UpdateTabContratoDto): Promise<TabContrato> {
    await this.tabContratoRepository.update(id, updateTabContratoDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.tabContratoRepository.delete(id);
  }
}