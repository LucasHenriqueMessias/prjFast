import { PartialType } from '@nestjs/swagger';
import { CreateCursosEmbbedVideoDto } from './create-cursos_embbed_video.dto';

export class UpdateCursosEmbbedVideoDto extends PartialType(CreateCursosEmbbedVideoDto) {}
