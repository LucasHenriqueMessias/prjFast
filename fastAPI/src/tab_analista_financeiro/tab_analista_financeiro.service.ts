import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTabAnalistaFinanceiroDto } from './dto/create-tab_analista_financeiro.dto';
import { UpdateTabAnalistaFinanceiroDto } from './dto/update-tab_analista_financeiro.dto';
import { TabAnalistaFinanceiro } from './entities/tab_analista_financeiro.entity';

@Injectable()
export class TabAnalistaFinanceiroService {
  constructor(
    @InjectRepository(TabAnalistaFinanceiro)
    private readonly tabAnalistaFinanceiroRepository: Repository<TabAnalistaFinanceiro>,
  ) {}

  create(createTabAnalistaFinanceiroDto: CreateTabAnalistaFinanceiroDto) {
    const analista = this.tabAnalistaFinanceiroRepository.create(createTabAnalistaFinanceiroDto);
    return this.tabAnalistaFinanceiroRepository.save(analista);
  }

  findAll() {
    return this.tabAnalistaFinanceiroRepository.find();
  }

  async findOne(id: number) {
    const analista = await this.tabAnalistaFinanceiroRepository.findOne({ where: { id } });
    if (!analista) {
      throw new NotFoundException(`Analista Financeiro com ID ${id} não encontrado`);
    }
    return analista;
  }

  async update(id: number, updateTabAnalistaFinanceiroDto: UpdateTabAnalistaFinanceiroDto) {
    const analista = await this.findOne(id);
    Object.assign(analista, updateTabAnalistaFinanceiroDto);
    return this.tabAnalistaFinanceiroRepository.save(analista);
  }

  async remove(id: number) {
    const analista = await this.findOne(id);
    return this.tabAnalistaFinanceiroRepository.remove(analista);
  }
}