import { Module } from '@nestjs/common';
import { TabLojaService } from './tab_loja.service';
import { TabLojaController } from './tab_loja.controller';
import { TabLoja } from './entities/tab_loja.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TabLoja])],
  controllers: [TabLojaController],
  providers: [TabLojaService],
})
export class TabLojaModule {}
