import { PartialType } from '@nestjs/mapped-types';
import { CreateTabFerramentaDto } from './create-tab_ferramenta.dto';

export class UpdateTabFerramentaDto extends PartialType(CreateTabFerramentaDto) {}
