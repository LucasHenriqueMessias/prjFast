import { Module } from '@nestjs/common';
import { TabDreService } from './tab_dre.service';
import { TabDreController } from './tab_dre.controller';
import { TabDre } from './entities/tab_dre.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TabDre])],
  controllers: [TabDreController],
  providers: [TabDreService],
})
export class TabDreModule {}
