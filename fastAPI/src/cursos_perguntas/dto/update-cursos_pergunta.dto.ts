import { PartialType } from '@nestjs/swagger';
import { CreateCursosPerguntaDto } from './create-cursos_pergunta.dto';

export class UpdateCursosPerguntaDto extends PartialType(CreateCursosPerguntaDto) {}
