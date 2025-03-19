import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TabHelpdeskService } from './tab_helpdesk.service';
import { TabHelpdeskController } from './tab_helpdesk.controller';
import { TabHelpdesk } from './entities/tab_helpdesk.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TabHelpdesk])],
  controllers: [TabHelpdeskController],
  providers: [TabHelpdeskService],
})
export class TabHelpdeskModule {}
