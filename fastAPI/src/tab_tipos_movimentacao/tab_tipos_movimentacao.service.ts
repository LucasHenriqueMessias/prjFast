/*
Created By: Lucas Henrique Messias Gonçalves
Date: 18.07.24
Description: This file contains all methods from tab_tipos_movimentacao controller's use.
*/


import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTabTiposMovimentacaoDto } from './dto/create-tab_tipos_movimentacao.dto';
import { UpdateTabTiposMovimentacaoDto } from './dto/update-tab_tipos_movimentacao.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TabTiposMovimentacao } from './entities/tab_tipos_movimentacao.entity';
import { Repository } from 'typeorm';
import { NotFoundError } from 'rxjs';

@Injectable()
export class TabTiposMovimentacaoService {

  //Define Object Constructor to JSON's input
  constructor(
    @InjectRepository(TabTiposMovimentacao)
    private readonly tiposmovimentacaoRepository:
    Repository<TabTiposMovimentacao>){}


  //Insert JSON Value on Table
  async create(createTabTiposMovimentacaoDto: CreateTabTiposMovimentacaoDto) {
    const movimentacao = this.tiposmovimentacaoRepository.create(createTabTiposMovimentacaoDto);
    return await this.tiposmovimentacaoRepository.save(movimentacao);
  }

  //Return all data from table
  async findAll() {
    return await this.tiposmovimentacaoRepository.find(); 
  }

  //Return data by id_movimentacao
  async findOne(id_movimentacao: number) {
    return await this.tiposmovimentacaoRepository.findOne({
      where: {id_movimentacao}
    })
  }

  //Update fields where id_movimentacao is equal to JSON's ID
  async update(id: number, updateTabTiposMovimentacaoDto: UpdateTabTiposMovimentacaoDto) {
    const desc = await this.findOne(id)

    if (!desc){
      throw new NotFoundException();
    }
      
    Object.assign(desc, updateTabTiposMovimentacaoDto)
    return await this.tiposmovimentacaoRepository.save(desc);
  }

  //Remove fields where id_movimentacao is equal to JSON's ID
  async remove(id: number) {
    const desc = await this.findOne(id);
    if(!desc){
      throw new NotFoundException();
    }

    return await this.tiposmovimentacaoRepository.remove(desc);
  }

}
