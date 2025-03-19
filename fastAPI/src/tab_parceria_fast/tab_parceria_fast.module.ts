import { Module } from '@nestjs/common';
import { TabParceriaFastService } from './tab_parceria_fast.service';
import { TabParceriaFastController } from './tab_parceria_fast.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TabParceriaFast } from './entities/tab_parceria_fast.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TabParceriaFast])],
  controllers: [TabParceriaFastController],
  providers: [TabParceriaFastService],
})
export class TabParceriaFastModule {}
