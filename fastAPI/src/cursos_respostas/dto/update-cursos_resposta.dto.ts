import { PartialType } from '@nestjs/swagger';
import { CreateCursosRespostaDto } from './create-cursos_resposta.dto';

export class UpdateCursosRespostaDto extends PartialType(CreateCursosRespostaDto) {}
