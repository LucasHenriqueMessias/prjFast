import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTabParceriaFastDto } from './dto/create-tab_parceria_fast.dto';
import { UpdateTabParceriaFastDto } from './dto/update-tab_parceria_fast.dto';
import { TabParceriaFast } from './entities/tab_parceria_fast.entity';

@Injectable()
export class TabParceriaFastService {
  constructor(
    @InjectRepository(TabParceriaFast)
    private readonly tabParceriaFastRepository: Repository<TabParceriaFast>,
  ) {}

  async create(createTabParceriaFastDto: CreateTabParceriaFastDto): Promise<TabParceriaFast> {
    const tabParceriaFast = this.tabParceriaFastRepository.create(createTabParceriaFastDto);
    return await this.tabParceriaFastRepository.save(tabParceriaFast);
  }

  async findAll(): Promise<TabParceriaFast[]> {
    return await this.tabParceriaFastRepository.find();
  }

  async findOne(id: number): Promise<TabParceriaFast> {
    return await this.tabParceriaFastRepository.findOne({where: {id}});
  }

  async update(id: number, updateTabParceriaFastDto: UpdateTabParceriaFastDto): Promise<TabParceriaFast> {
    await this.tabParceriaFastRepository.update(id, updateTabParceriaFastDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.tabParceriaFastRepository.delete(id);
  }

  async getCountParceriaPorUsuario(): Promise<TabParceriaFast[]> {
    return await this.tabParceriaFastRepository.createQueryBuilder('tab_parceria_fast')
    .select('tab_parceria_fast.usuario', 'usuario')
    .addSelect('COUNT(tab_parceria_fast.parceiro)', 'count')
    .groupBy('tab_parceria_fast.usuario')
    .getRawMany();
    

  }
}