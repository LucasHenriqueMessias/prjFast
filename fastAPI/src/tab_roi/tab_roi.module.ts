import { Module } from '@nestjs/common';
import { TabRoiService } from './tab_roi.service';
import { TabRoiController } from './tab_roi.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TabRoi } from './entities/tab_roi.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TabRoi])],
  controllers: [TabRoiController],
  providers: [TabRoiService],
})
export class TabRoiModule {}
