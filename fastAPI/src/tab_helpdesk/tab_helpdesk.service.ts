import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTabHelpdeskDto } from './dto/create-tab_helpdesk.dto';
import { UpdateTabHelpdeskDto } from './dto/update-tab_helpdesk.dto';
import { TabHelpdesk } from './entities/tab_helpdesk.entity';

@Injectable()
export class TabHelpdeskService {
  constructor(
    @InjectRepository(TabHelpdesk)
    private readonly tabHelpdeskRepository: Repository<TabHelpdesk>,
  ) {}

  async create(createTabHelpdeskDto: CreateTabHelpdeskDto): Promise<TabHelpdesk> {
    const tabHelpdesk = this.tabHelpdeskRepository.create(createTabHelpdeskDto);
    return await this.tabHelpdeskRepository.save(tabHelpdesk);
  }

  async findAll(): Promise<TabHelpdesk[]> {
    return await this.tabHelpdeskRepository.find();
  }

  async findOne(id: string): Promise<TabHelpdesk> {
    return await this.tabHelpdeskRepository.findOne({ where: { id } });
  }

  async update(id: string, updateTabHelpdeskDto: UpdateTabHelpdeskDto): Promise<TabHelpdesk> {
    await this.tabHelpdeskRepository.update(id, updateTabHelpdeskDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.tabHelpdeskRepository.delete(id);
  }

  async findBySolicitante(Solicitante: string): Promise<TabHelpdesk[]> {
    return await this.tabHelpdeskRepository.find({ where: { Solicitante } });
  }

  async findByResponsavel(Responsavel: string): Promise<TabHelpdesk[]> {
    return await this.tabHelpdeskRepository.find({ where: { Responsavel } });
  }
}
