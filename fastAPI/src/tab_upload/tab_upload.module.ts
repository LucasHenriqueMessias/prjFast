import { Module } from '@nestjs/common';
import { TabUploadService } from './tab_upload.service';
import { TabUploadController } from './tab_upload.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TabUpload } from './entities/tab_upload.entity';
@Module({
  imports: [TypeOrmModule.forFeature([TabUpload])],
  controllers: [TabUploadController],
  providers: [TabUploadService],
})
export class TabUploadModule {}
