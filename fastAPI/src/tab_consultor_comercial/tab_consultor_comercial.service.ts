import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTabConsultorComercialDto } from './dto/create-tab_consultor_comercial.dto';
import { UpdateTabConsultorComercialDto } from './dto/update-tab_consultor_comercial.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TabConsultorComercial } from './entities/tab_consultor_comercial.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TabConsultorComercialService {

  constructor(
    @InjectRepository(TabConsultorComercial)
    private readonly comercialRepository: Repository<TabConsultorComercial>
  ) {}

  async create(createTabConsultorComercialDto: CreateTabConsultorComercialDto) {
    const consultor = this.comercialRepository.create(createTabConsultorComercialDto);
    return await this.comercialRepository.save(consultor);
  }

  async findAll() {
    return await this.comercialRepository.find();
  }

  async findOne(id: number) {
    const consultor = await this.comercialRepository.findOne({ where: { id } });
    if (!consultor) {
      throw new NotFoundException(`Consultor Comercial with ID ${id} not found`);
    }
    return consultor;
  }

  async update(id: number, updateTabConsultorComercialDto: UpdateTabConsultorComercialDto) {
    const consultor = await this.comercialRepository.preload({
      id: id,
      ...updateTabConsultorComercialDto,
    });
    if (!consultor) {
      throw new NotFoundException(`Consultor Comercial with ID ${id} not found`);
    }
    return await this.comercialRepository.save(consultor);
  }

  async remove(id: number) {
    const consultor = await this.findOne(id);
    return await this.comercialRepository.remove(consultor);
  }
}