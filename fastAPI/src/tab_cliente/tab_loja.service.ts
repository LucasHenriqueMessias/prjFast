import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTabLojaDto } from './dto/create-tab_loja.dto';
import { UpdateTabLojaDto } from './dto/update-tab_loja.dto';
import { TabLoja } from './entities/tab_loja.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TabLojaService {

  constructor(
    @InjectRepository(TabLoja)
    private readonly TabLojaRepository:
    Repository<TabLoja>){

    }

  async create(createTabLojaDto: CreateTabLojaDto) {
    const loja = this.TabLojaRepository.create(createTabLojaDto)
    return await this.TabLojaRepository.save(loja);
  }

  async findAll() {
    return await this.TabLojaRepository.find();
  }

  async findOne(cnpj: string) {
    return await this.TabLojaRepository.findOne({
      where: {cnpj}
    });
  }

  async update(cnpj_me: string, updateTabLojaDto: UpdateTabLojaDto) {
    const loja = await this.findOne(cnpj_me);

    if(!loja){
      throw new NotFoundException();
    }

    Object.assign(loja, updateTabLojaDto);
    
    return await this.TabLojaRepository.save(loja);

  }

   async remove(cnpj_me: string) {
    const loja = await this.findOne(cnpj_me);
    if(!loja){
     throw new NotFoundException();
    } 
 
    return await this.TabLojaRepository.remove(loja);  
  }

  async getChurn() {
    const lojas = await this.TabLojaRepository.find();
    const churn = { Ativos: 0, Inativos: 0 };

    lojas.forEach(loja => {
      if (loja.status === "Ativo") {
        churn.Ativos += 1;
      } else if (loja.status === "Inativo") {
        churn.Inativos += 1;
      }
    });

    return churn;
  }

  async getChurn30d() {
    const lojas = await this.TabLojaRepository.find();
    const churn30d = { data_contratacao_fast: 0, data_saida_fast: 0 };
    const now = new Date();
    const past30Days = new Date(now.setDate(now.getDate() - 30));

    lojas.forEach(loja => {
      if (new Date(loja.data_contratacao_fast) >= past30Days) {
        churn30d.data_contratacao_fast += 1;
      }
      if (new Date(loja.data_saida_fast) >= past30Days) {
        churn30d.data_saida_fast += 1;
      }
    });

    return churn30d;
  }

  async getChurnRate() {
    const lojas = await this.TabLojaRepository.find();
    const now = new Date();
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

    let totalClientesInicioPeriodo = 0;
    let totalClientesCancelados = 0;

    lojas.forEach(loja => {
      if (new Date(loja.data_contratacao_fast) <= startOfMonth) {
        totalClientesInicioPeriodo += 1;
      }
      if (loja.status === "Inativo" && new Date(loja.data_saida_fast) >= startOfMonth && new Date(loja.data_saida_fast) <= now) {
        totalClientesCancelados += 1;
      }
    });

    const churnRate = (totalClientesCancelados / totalClientesInicioPeriodo) * 100;

    return { churnRate: churnRate || 0 };
  }
}
