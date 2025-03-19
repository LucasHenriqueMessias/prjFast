import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTabReuniaoDto } from './dto/create-tab_reuniao.dto';
import { UpdateTabReuniaoDto } from './dto/update-tab_reuniao.dto';
import { TabReuniao } from './entities/tab_reuniao.entity';

@Injectable()
export class TabReuniaoService {
  constructor(
    @InjectRepository(TabReuniao)
    private readonly tabReuniaoRepository: Repository<TabReuniao>,
  ) {}

  async create(createTabReuniaoDto: CreateTabReuniaoDto) {
    const reuniao = this.tabReuniaoRepository.create(createTabReuniaoDto);
    return await this.tabReuniaoRepository.save(reuniao);
  }

  async findAll() {
    return await this.tabReuniaoRepository.find();
  }

  async findOne(id: number) {
    return await this.tabReuniaoRepository.findOne({ where: { id } });
  }

  async update(id: number, updateTabReuniaoDto: UpdateTabReuniaoDto) {
    const reuniao = await this.findOne(id);
    if (!reuniao) {
      throw new NotFoundException();
    }
    Object.assign(reuniao, updateTabReuniaoDto);
    return await this.tabReuniaoRepository.save(reuniao);
  }

  async remove(id: number) {
    const reuniao = await this.findOne(id);
    if (!reuniao) {
      throw new NotFoundException();
    }
    return await this.tabReuniaoRepository.remove(reuniao);
  }
}