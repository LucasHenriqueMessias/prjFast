import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTabSucessoClienteDto } from './dto/create-tab_sucesso_cliente.dto';
import { UpdateTabSucessoClienteDto } from './dto/update-tab_sucesso_cliente.dto';
import { TabSucessoCliente } from './entities/tab_sucesso_cliente.entity';

@Injectable()
export class TabSucessoClienteService {
  constructor(
    @InjectRepository(TabSucessoCliente)
    private readonly tabSucessoClienteRepository: Repository<TabSucessoCliente>,
  ) {}

  async create(createTabSucessoClienteDto: CreateTabSucessoClienteDto): Promise<TabSucessoCliente> {
    const tabSucessoCliente = this.tabSucessoClienteRepository.create(createTabSucessoClienteDto);
    return this.tabSucessoClienteRepository.save(tabSucessoCliente);
  }

  async findAll(): Promise<TabSucessoCliente[]> {
    return this.tabSucessoClienteRepository.find();
  }

  async findOne(id: number): Promise<TabSucessoCliente> {
    return this.tabSucessoClienteRepository.findOne({ where: { id } });
  }

  async update(id: number, updateTabSucessoClienteDto: UpdateTabSucessoClienteDto): Promise<TabSucessoCliente> {
    await this.tabSucessoClienteRepository.update(id, updateTabSucessoClienteDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.tabSucessoClienteRepository.delete(id);
  }
}