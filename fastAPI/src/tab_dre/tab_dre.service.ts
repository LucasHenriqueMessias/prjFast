/*
author: Lucas Henrique Messias Gonçalves
Date: 22.08.24

*/

import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTabDreDto } from './dto/create-tab_dre.dto';
import { UpdateTabDreDto } from './dto/update-tab_dre.dto';
import { TabDre } from './entities/tab_dre.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TabDreService {

  constructor(
    @InjectRepository(TabDre)
    private readonly TabDreRepository:
    Repository<TabDre>){

    }


  async create(createTabDreDto: CreateTabDreDto) {
    const dre = this.TabDreRepository.create(createTabDreDto)
    return await this.TabDreRepository.save(dre);
  }

  async findAll() {
    return await this.TabDreRepository.find();
  }

  //data && cnpj 
  async findAllByDate(Data: Date, Cliente: string) {
    return await this.TabDreRepository.find({where: {Data} && {Cliente}});
  }




  //Necessário para a utilização do update e remove
  //data && cnpj && descricao
  async findOne(id: number){
    return await this.TabDreRepository.findOne({where: {id} });
  }

  //data && cnpj && descricao
  async update(id: number, updateTabDreDto: UpdateTabDreDto) {

    const dre = await this.findOne(id);
    if(!dre){
      throw new NotFoundException();
    }
    Object.assign(dre, updateTabDreDto);
    return await this.TabDreRepository.save(dre);
  }

  //data && cnpj && descricao
  async remove(id: number) {

    const dre = await this.findOne(id);
    if(!dre){
      throw new NotFoundException();
    }
    return await this.TabDreRepository.remove(dre);

  }
}
