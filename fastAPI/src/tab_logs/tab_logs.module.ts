import { Module } from '@nestjs/common';
import { TabLogsService } from './tab_logs.service';
import { TabLogsController } from './tab_logs.controller';

@Module({
  controllers: [TabLogsController],
  providers: [TabLogsService],
})
export class TabLogsModule {}
