import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TabConsultorFinanceiroService } from './tab_consultor_financeiro.service';
import { TabConsultorFinanceiroController } from './tab_consultor_financeiro.controller';
import { TabConsultorFinanceiro } from './entities/tab_consultor_financeiro.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TabConsultorFinanceiro])],
  controllers: [TabConsultorFinanceiroController],
  providers: [TabConsultorFinanceiroService],
})
export class TabConsultorFinanceiroModule {}