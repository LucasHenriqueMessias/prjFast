import { Module } from '@nestjs/common';
import { TabContratoService } from './tab_contrato.service';
import { TabContratoController } from './tab_contrato.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TabContrato } from './entities/tab_contrato.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TabContrato])],
  controllers: [TabContratoController],
  providers: [TabContratoService],
})
export class TabContratoModule {}
