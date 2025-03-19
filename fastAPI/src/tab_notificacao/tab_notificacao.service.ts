import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTabNotificacaoDto } from './dto/create-tab_notificacao.dto';
import { UpdateTabNotificacaoDto } from './dto/update-tab_notificacao.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TabNotificacao } from './entities/tab_notificacao.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TabNotificacaoService {

  constructor(
    @InjectRepository(TabNotificacao)
    private notificationRepository: Repository<TabNotificacao>,
  ) {}


  async create(TabNotificacao: CreateTabNotificacaoDto): Promise<TabNotificacao> {
    const tabNotificacao = this.notificationRepository.create(TabNotificacao);
    return await this.notificationRepository.save(tabNotificacao);
  }

  async findAll(): Promise<TabNotificacao[]> {
    return await this.notificationRepository.find();
  }

  async findOne(id: string): Promise<TabNotificacao> {
    return await this.notificationRepository.findOne({where: {id}});
  }

  //not implemented
 async findOneUser(user: string): Promise<TabNotificacao> {
    return await this.notificationRepository.findOne({where: {user}});
  }

  async findAllByUser(user: string): Promise<TabNotificacao[]> {
    return await this.notificationRepository.find({ where: { user, active: true } });
  }

  async update(id: string, updateTabFotografiaClienteDto:UpdateTabNotificacaoDto): Promise<TabNotificacao> {
    await this.notificationRepository.update(id, updateTabFotografiaClienteDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.notificationRepository.delete(id);
  }


}
