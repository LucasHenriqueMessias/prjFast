import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTabFotografiaClienteDto } from './dto/create-tab_fotografia_cliente.dto';
import { UpdateTabFotografiaClienteDto } from './dto/update-tab_fotografia_cliente.dto';
import { TabFotografiaCliente } from './entities/tab_fotografia_cliente.entity';

@Injectable()
export class TabFotografiaClienteService {
  constructor(
    @InjectRepository(TabFotografiaCliente)
    private readonly tabFotografiaClienteRepository: Repository<TabFotografiaCliente>,
  ) {}

  async create(createTabFotografiaClienteDto: CreateTabFotografiaClienteDto): Promise<TabFotografiaCliente> {
    const tabFotografiaCliente = this.tabFotografiaClienteRepository.create(createTabFotografiaClienteDto);
    return await this.tabFotografiaClienteRepository.save(tabFotografiaCliente);
  }

  async findAll(): Promise<TabFotografiaCliente[]> {
    return await this.tabFotografiaClienteRepository.find();
  }

  async findOne(id: number): Promise<TabFotografiaCliente> {
    return await this.tabFotografiaClienteRepository.findOne({where: {id}});
  }

  async update(id: number, updateTabFotografiaClienteDto: UpdateTabFotografiaClienteDto): Promise<TabFotografiaCliente> {
    await this.tabFotografiaClienteRepository.update(id, updateTabFotografiaClienteDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.tabFotografiaClienteRepository.delete(id);
  }
}