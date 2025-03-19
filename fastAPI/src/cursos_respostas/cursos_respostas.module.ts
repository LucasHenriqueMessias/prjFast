import { Module } from '@nestjs/common';
import { CursosRespostasService } from './cursos_respostas.service';
import { CursosRespostasController } from './cursos_respostas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CursosResposta } from './entities/cursos_resposta.entity';

@Module({
  controllers: [CursosRespostasController],
  providers: [CursosRespostasService],
  imports: [TypeOrmModule.forFeature([CursosResposta])],
})
export class CursosRespostasModule {}
