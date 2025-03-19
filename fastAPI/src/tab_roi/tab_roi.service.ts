import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTabRoiDto } from './dto/create-tab_roi.dto';
import { UpdateTabRoiDto } from './dto/update-tab_roi.dto';
import { TabRoi } from './entities/tab_roi.entity';

@Injectable()
export class TabRoiService {
  constructor(
    @InjectRepository(TabRoi)
    private readonly tabRoiRepository: Repository<TabRoi>,
  ) {}

  async create(createTabRoiDto: CreateTabRoiDto): Promise<TabRoi> {
    const tabRoi = this.tabRoiRepository.create(createTabRoiDto);
    return await this.tabRoiRepository.save(tabRoi);
  }

  async findAll(): Promise<TabRoi[]> {
    return await this.tabRoiRepository.find();
  }

  async findOne(id: number): Promise<TabRoi> {
    return await this.tabRoiRepository.findOne({where: {id}});
  }

  async update(id: number, updateTabRoiDto: UpdateTabRoiDto): Promise<TabRoi> {
    await this.tabRoiRepository.update(id, updateTabRoiDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.tabRoiRepository.delete(id);
  }
}