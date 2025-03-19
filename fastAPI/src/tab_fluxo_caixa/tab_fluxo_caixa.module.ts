import { Module } from '@nestjs/common';
import { TabFluxoCaixaService } from './tab_fluxo_caixa.service';
import { TabFluxoCaixaController } from './tab_fluxo_caixa.controller';
import { TabFluxoCaixa } from './entities/tab_fluxo_caixa.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TabFluxoCaixa])],
  controllers: [TabFluxoCaixaController],
  providers: [TabFluxoCaixaService],
})
export class TabFluxoCaixaModule {}
