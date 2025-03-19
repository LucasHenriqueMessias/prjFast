import { Module } from '@nestjs/common';
import { TabSinalAmareloService } from './tab_sinal_amarelo.service';
import { TabSinalAmareloController } from './tab_sinal_amarelo.controller';
import { TabSinalAmarelo } from './entities/tab_sinal_amarelo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TabSinalAmarelo])],
  controllers: [TabSinalAmareloController],
  providers: [TabSinalAmareloService],
})
export class TabSinalAmareloModule {}
