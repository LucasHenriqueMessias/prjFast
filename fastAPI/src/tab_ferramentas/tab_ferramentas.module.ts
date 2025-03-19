import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TabFerramentasService } from './tab_ferramentas.service';
import { TabFerramentasController } from './tab_ferramentas.controller';
import { TabFerramenta } from './entities/tab_ferramenta.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TabFerramenta])],
  controllers: [TabFerramentasController],
  providers: [TabFerramentasService],
})
export class TabFerramentasModule {}