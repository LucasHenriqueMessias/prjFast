import { Module } from '@nestjs/common';
import { TabTiposMovimentacaoService } from './tab_tipos_movimentacao.service';
import { TabTiposMovimentacaoController } from './tab_tipos_movimentacao.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TabTiposMovimentacao } from './entities/tab_tipos_movimentacao.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TabTiposMovimentacao])],
  controllers: [TabTiposMovimentacaoController],
  providers: [TabTiposMovimentacaoService],
})
export class TabTiposMovimentacaoModule {}
