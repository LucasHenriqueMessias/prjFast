import { PartialType } from '@nestjs/mapped-types';
import { CreateTabSinalAmareloDto } from './create-tab_sinal_amarelo.dto';

export class UpdateTabSinalAmareloDto extends PartialType(CreateTabSinalAmareloDto) {}
