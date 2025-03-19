import { Module } from '@nestjs/common';
import { CursosEmbbedVideoService } from './cursos_embbed_video.service';
import { CursosEmbbedVideoController } from './cursos_embbed_video.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CursosEmbbedVideo } from './entities/cursos_embbed_video.entity';

@Module({
  controllers: [CursosEmbbedVideoController],
  providers: [CursosEmbbedVideoService],
  imports: [TypeOrmModule.forFeature([CursosEmbbedVideo])],
})
export class CursosEmbbedVideoModule {}
