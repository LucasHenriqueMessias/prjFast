import { Module } from '@nestjs/common';
import { TabConsultorComercialService } from './tab_consultor_comercial.service';
import { TabConsultorComercialController } from './tab_consultor_comercial.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TabConsultorComercial } from './entities/tab_consultor_comercial.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TabConsultorComercial])],
  controllers: [TabConsultorComercialController],
  providers: [TabConsultorComercialService],
})
export class TabConsultorComercialModule {}
