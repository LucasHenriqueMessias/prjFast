import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TabProspeccaoService } from './tab_prospeccao.service';
import { TabProspeccaoController } from './tab_prospeccao.controller';
import { TabProspeccao } from './entities/tab_prospeccao.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TabProspeccao])],
  controllers: [TabProspeccaoController],
  providers: [TabProspeccaoService],
})
export class TabProspeccaoModule {}