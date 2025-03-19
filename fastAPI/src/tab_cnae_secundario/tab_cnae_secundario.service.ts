import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTabCnaeSecundarioDto } from './dto/create-tab_cnae_secundario.dto';
import { UpdateTabCnaeSecundarioDto } from './dto/update-tab_cnae_secundario.dto';
import { TabCnaeSecundario } from './entities/tab_cnae_secundario.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TabCnaeSecundarioService {


  constructor(

    @InjectRepository(TabCnaeSecundario)
    private readonly tabCnaeRepository:
    Repository<TabCnaeSecundario>){

    }

  async create(createTabCnaeSecundarioDto: CreateTabCnaeSecundarioDto) {
    const cnae = this.tabCnaeRepository.create(createTabCnaeSecundarioDto);
    return await this.tabCnaeRepository.save(cnae);
  }

  async findAll() {
    return await this.tabCnaeRepository.find();
  }

  async findAllByCodigo(codigo: number) {
    return await this.tabCnaeRepository.find({
      where: {codigo}
    });
  }

  async update(codigo: number, updateTabCnaeSecundarioDto: UpdateTabCnaeSecundarioDto) {
    const cnae = await this.tabCnaeRepository.findOne({where: {codigo}});

    if(!cnae){
      throw new NotFoundException();
    }

    Object.assign(cnae, updateTabCnaeSecundarioDto);
    
    return await this.tabCnaeRepository.save(cnae);
  }

  async remove(codigo: number, cnpj:string) {
    const cnae = await this.tabCnaeRepository.findOne({where: {codigo} && {cnpj}});

    if(!cnae){
      throw new NotFoundException();
    }

    return await this.tabCnaeRepository.remove(cnae);
  }
}
