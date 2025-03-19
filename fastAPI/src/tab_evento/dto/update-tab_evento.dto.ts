import { PartialType } from '@nestjs/swagger';
import { CreateTabEventoDto } from './create-tab_evento.dto';

export class UpdateTabEventoDto extends PartialType(CreateTabEventoDto) {}
