import { Injectable } from '@nestjs/common';
import { CreateTabChecklistReuniaoDto } from './dto/create-tab_checklist_reuniao.dto';
import { UpdateTabChecklistReuniaoDto } from './dto/update-tab_checklist_reuniao.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TabChecklistReuniao } from './entities/tab_checklist_reuniao.entity';

@Injectable()
export class TabChecklistReuniaoService {
  constructor(
    @InjectRepository(TabChecklistReuniao)
    private readonly tabChecklistReuniaoRepository: Repository<TabChecklistReuniao>,
  ) {}

  async create(createTabChecklistReuniaoDto: CreateTabChecklistReuniaoDto): Promise<TabChecklistReuniao> {
    const tabChecklistReuniao = this.tabChecklistReuniaoRepository.create(createTabChecklistReuniaoDto);
    return await this.tabChecklistReuniaoRepository.save(tabChecklistReuniao);
  }

  async findAll(): Promise<TabChecklistReuniao[]> {
    return await this.tabChecklistReuniaoRepository.find();
  }

  async findOne(id: number): Promise<TabChecklistReuniao> {
    return await this.tabChecklistReuniaoRepository.findOne({where: { id }});
  }

  async update(id: number, updateTabChecklistReuniaoDto: UpdateTabChecklistReuniaoDto): Promise<TabChecklistReuniao> {
    await this.tabChecklistReuniaoRepository.update(id, updateTabChecklistReuniaoDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.tabChecklistReuniaoRepository.delete(id);
  }
}
