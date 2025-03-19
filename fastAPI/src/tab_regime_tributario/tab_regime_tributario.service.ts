/*
author: Lucas Henrique Messias Gonçalves
Date: 23.08.24

*/
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTabRegimeTributarioDto } from './dto/create-tab_regime_tributario.dto';
import { UpdateTabRegimeTributarioDto } from './dto/update-tab_regime_tributario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TabRegimeTributario } from './entities/tab_regime_tributario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TabRegimeTributarioService {

    constructor(
      @InjectRepository(TabRegimeTributario)
      private readonly TabRegimeRepository:
      Repository<TabRegimeTributario>){
  
      }

  async create(createTabRegimeTributarioDto: CreateTabRegimeTributarioDto) {
    const regime = this.TabRegimeRepository.create(createTabRegimeTributarioDto)
    return await this.TabRegimeRepository.save(regime);
  }

  async findAll() {
    return await this.TabRegimeRepository.find();
  }

  async findOne(id: number) {
    return await this.TabRegimeRepository.findOne({where: {id}});
  }

  async update(id: number, updateTabRegimeTributarioDto: UpdateTabRegimeTributarioDto) {
    
    const regime = await this.findOne(id);
    if(!regime){
      throw new NotFoundException();
    }
    Object.assign(regime, updateTabRegimeTributarioDto);

    return await this.TabRegimeRepository.save(regime);
  }

  async remove(id: number) {
    const regime = await this.findOne(id);
    if (!regime){
      throw new NotFoundException();
    }

    return await this.TabRegimeRepository.remove(regime);
  }
}
