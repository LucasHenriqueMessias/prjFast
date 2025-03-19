import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTabConsultorFinanceiroDto } from './dto/create-tab_consultor_financeiro.dto';
import { UpdateTabConsultorFinanceiroDto } from './dto/update-tab_consultor_financeiro.dto';
import { TabConsultorFinanceiro } from './entities/tab_consultor_financeiro.entity';

@Injectable()
export class TabConsultorFinanceiroService {
  constructor(
    @InjectRepository(TabConsultorFinanceiro)
    private readonly tabConsultorFinanceiroRepository: Repository<TabConsultorFinanceiro>,
  ) {}

  async create(createTabConsultorFinanceiroDto: CreateTabConsultorFinanceiroDto): Promise<TabConsultorFinanceiro> {
    const tabConsultorFinanceiro = this.tabConsultorFinanceiroRepository.create(createTabConsultorFinanceiroDto);
    return this.tabConsultorFinanceiroRepository.save(tabConsultorFinanceiro);
  }

  async findAll(): Promise<TabConsultorFinanceiro[]> {
    return this.tabConsultorFinanceiroRepository.find();
  }

  async findOne(id: number): Promise<TabConsultorFinanceiro> {
    return this.tabConsultorFinanceiroRepository.findOne({where: {id}});
  }

  async update(id: number, updateTabConsultorFinanceiroDto: UpdateTabConsultorFinanceiroDto): Promise<TabConsultorFinanceiro> {
    await this.tabConsultorFinanceiroRepository.update(id, updateTabConsultorFinanceiroDto);
    return this.tabConsultorFinanceiroRepository.findOne({where: {id}});
  }

  async remove(id: number): Promise<void> {
    await this.tabConsultorFinanceiroRepository.delete(id);
  }
}