import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTabProspeccaoDto } from './dto/create-tab_prospeccao.dto';
import { UpdateTabProspeccaoDto } from './dto/update-tab_prospeccao.dto';
import { TabProspeccao } from './entities/tab_prospeccao.entity';

@Injectable()
export class TabProspeccaoService {
  constructor(
    @InjectRepository(TabProspeccao)
    private readonly tabProspeccaoRepository: Repository<TabProspeccao>,
  ) { }

  async create(createTabProspeccaoDto: CreateTabProspeccaoDto): Promise<TabProspeccao> {
    const tabProspeccao = this.tabProspeccaoRepository.create(createTabProspeccaoDto);
    return this.tabProspeccaoRepository.save(tabProspeccao);
  }

  async findAll(): Promise<TabProspeccao[]> {
    return this.tabProspeccaoRepository.find();
  }

  async findOne(id: number): Promise<TabProspeccao> {
    return this.tabProspeccaoRepository.findOne({ where: { id } });
  }


  //coleta a informação de quantas empresas cada consultor prospectou
  async getEmpresasCountByConsultor(): Promise<TabProspeccao[]> {
    return await this.tabProspeccaoRepository.createQueryBuilder('tab_prospeccao')
      .select('tab_prospeccao.consultor_comercial', 'consultor_comercial')
      .addSelect('COUNT(tab_prospeccao.consultor_comercial)', 'count')
      .groupBy('tab_prospeccao.consultor_comercial')
      .getRawMany();


  }
//coleta a informação de quantas empresas cada consultor prospectou
async getCountIndicacaoConsultor(): Promise<TabProspeccao[]> {
  return await this.tabProspeccaoRepository.createQueryBuilder('tab_prospeccao')
    .select('tab_prospeccao.indicacao_nome', 'indicacao_nome')
    .addSelect('COUNT(tab_prospeccao.indicacao_nome)', 'count')
    .groupBy('tab_prospeccao.indicacao_nome')
    .getRawMany();


}



  // coleta a informação de quantas empresas cada consultor prospectou onde indicação = true
  async getEmpresasCountByConsultorWithIndicacaoTrue(): Promise<TabProspeccao[]> {
    return await this.tabProspeccaoRepository.createQueryBuilder('tab_prospeccao')
      .select('tab_prospeccao.consultor_comercial', 'consultor_comercial')
      .addSelect('COUNT(tab_prospeccao.consultor_comercial)', 'count')
      .where('tab_prospeccao.indicacao = :indicacao', { indicacao: true })
      .groupBy('tab_prospeccao.consultor_comercial')
      .getRawMany();
  }


  // coleta a quantidade de registros onde indicação = true e indicação = false
  async getIndicacaoCounts(): Promise<{ indicacaoTrueCount: number, indicacaoFalseCount: number }> {
    const indicacaoTrueCount = await this.tabProspeccaoRepository.createQueryBuilder('tab_prospeccao')
      .where('tab_prospeccao.indicacao = :indicacao', { indicacao: true })
      .getCount();

    const indicacaoFalseCount = await this.tabProspeccaoRepository.createQueryBuilder('tab_prospeccao')
      .where('tab_prospeccao.indicacao = :indicacao', { indicacao: false })
      .getCount();

    return { indicacaoTrueCount, indicacaoFalseCount };
  }

  async update(id: number, updateTabProspeccaoDto: UpdateTabProspeccaoDto): Promise<TabProspeccao> {
    await this.tabProspeccaoRepository.update(id, updateTabProspeccaoDto);
    return this.tabProspeccaoRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.tabProspeccaoRepository.delete(id);
  }
}