import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTabFluxoCaixaDto } from './dto/create-tab_fluxo_caixa.dto';
import { UpdateTabFluxoCaixaDto } from './dto/update-tab_fluxo_caixa.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TabFluxoCaixa } from './entities/tab_fluxo_caixa.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TabFluxoCaixaService {

  constructor(
    @InjectRepository(TabFluxoCaixa)
    private readonly TabFluxoCaixaRepository:
    Repository<TabFluxoCaixa>){

    }

  async create(createTabFluxoCaixaDto: CreateTabFluxoCaixaDto) {
    const fluxo = this.TabFluxoCaixaRepository.create(createTabFluxoCaixaDto)
    return await this.TabFluxoCaixaRepository.save(fluxo);
  }

  async findAll() {
    return await this.TabFluxoCaixaRepository.find();
  }

  async findOne(id: number) {
    return await this.TabFluxoCaixaRepository.findOne({
      where: {id}
    });
  }
  async findAllByClassif(Categoria: string) {
    return await this.TabFluxoCaixaRepository.find({
      where: {Categoria}
    });
  }

 async update(id: number, updateTabFluxoCaixaDto: UpdateTabFluxoCaixaDto) {
    const fluxo = await this.findOne(id);
    if (!fluxo){
      throw new NotFoundException();
    }  

    Object.assign(fluxo, updateTabFluxoCaixaDto);
    return await this.TabFluxoCaixaRepository.save(fluxo);
}

  async remove(id: number) {
    const fluxo = await this.findOne(id);
    if(!fluxo){
      throw new NotFoundException();
    }
    return await this.TabFluxoCaixaRepository.remove(fluxo)
  }
}
