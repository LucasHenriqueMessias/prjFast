import { Module } from '@nestjs/common';
import { TabEventoService } from './tab_evento.service';
import { TabEventoController } from './tab_evento.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TabEvento } from './entities/tab_evento.entity';

@Module({
  controllers: [TabEventoController],
  providers: [TabEventoService],
  imports: [TypeOrmModule.forFeature([TabEvento])],
})
export class TabEventoModule {}
