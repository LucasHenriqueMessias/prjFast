import { Module } from '@nestjs/common';
import { TabFastService } from './tab_fast.service';
import { TabFastController } from './tab_fast.controller';

@Module({
  controllers: [TabFastController],
  providers: [TabFastService],
})
export class TabFastModule {}
