import { Module } from '@nestjs/common';
import { TabNotificacaoService } from './tab_notificacao.service';
import { TabNotificacaoController } from './tab_notificacao.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TabNotificacao } from './entities/tab_notificacao.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TabNotificacao])],
  controllers: [TabNotificacaoController],
  providers: [TabNotificacaoService],
})
export class TabNotificacaoModule {}
