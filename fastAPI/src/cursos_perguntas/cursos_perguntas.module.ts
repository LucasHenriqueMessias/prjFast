import { Module } from '@nestjs/common';
import { CursosPerguntasService } from './cursos_perguntas.service';
import { CursosPerguntasController } from './cursos_perguntas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CursosPergunta } from './entities/cursos_pergunta.entity';

@Module({
  controllers: [CursosPerguntasController],
  providers: [CursosPerguntasService],
  imports: [TypeOrmModule.forFeature([CursosPergunta])],
})
export class CursosPerguntasModule {}
