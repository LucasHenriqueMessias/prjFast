import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTabSocioDto } from './dto/create-tab_socio.dto';
import { UpdateTabSocioDto } from './dto/update-tab_socio.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TabSocio } from './entities/tab_socio.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TabSociosService {
  constructor(
    @InjectRepository(TabSocio)
    private readonly tabSocioRepository:
    Repository<TabSocio>){

    }


  async create(createTabSocioDto: CreateTabSocioDto) {
    const socio = this.tabSocioRepository.create(createTabSocioDto)
    return await this.tabSocioRepository.save(socio);
   }

  async findAll() {
    return await this.tabSocioRepository.find();
  }

  async findOne(ID_Socio: number) {
    return await this.tabSocioRepository.findOne({
      where: {ID_Socio}
    });
  }

  async update(ID_Socio: number, updateTabSocioDto: UpdateTabSocioDto) {
    
    const socio = await this.findOne(ID_Socio);
    if (!socio){
      throw new NotFoundException();
    }  

    Object.assign(socio, updateTabSocioDto);
    return await this.tabSocioRepository.save(socio);  
  }

  
  async remove(ID_Socio: number) {
    const socio = await this.findOne(ID_Socio);
    if (!socio){
      throw new NotFoundException();
    }  

    return await this.tabSocioRepository.remove(socio);  
  }
}
