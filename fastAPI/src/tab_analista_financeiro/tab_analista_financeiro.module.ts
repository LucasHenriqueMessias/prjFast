import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TabAnalistaFinanceiroService } from './tab_analista_financeiro.service';
import { TabAnalistaFinanceiroController } from './tab_analista_financeiro.controller';
import { TabAnalistaFinanceiro } from './entities/tab_analista_financeiro.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TabAnalistaFinanceiro])],
  controllers: [TabAnalistaFinanceiroController],
  providers: [TabAnalistaFinanceiroService],
})
export class TabAnalistaFinanceiroModule {}