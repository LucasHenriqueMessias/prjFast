import { Module } from '@nestjs/common';
import { TabReuniaoService } from './tab_reuniao.service';
import { TabReuniaoController } from './tab_reuniao.controller';
import { TabReuniao } from './entities/tab_reuniao.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TabReuniao])],
  controllers: [TabReuniaoController],
  providers: [TabReuniaoService],
})
export class TabReuniaoModule {}
