import { Module } from '@nestjs/common';
import { TabChecklistReuniaoService } from './tab_checklist_reuniao.service';
import { TabChecklistReuniaoController } from './tab_checklist_reuniao.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TabChecklistReuniao } from './entities/tab_checklist_reuniao.entity';

@Module({
  controllers: [TabChecklistReuniaoController],
  providers: [TabChecklistReuniaoService],
  imports: [TypeOrmModule.forFeature([TabChecklistReuniao])],
})
export class TabChecklistReuniaoModule {}
