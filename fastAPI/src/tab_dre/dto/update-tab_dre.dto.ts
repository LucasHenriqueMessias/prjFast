import { PartialType } from '@nestjs/mapped-types';
import { CreateTabDreDto } from './create-tab_dre.dto';

export class UpdateTabDreDto extends PartialType(CreateTabDreDto) {}
