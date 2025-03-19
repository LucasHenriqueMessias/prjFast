import { PartialType } from '@nestjs/mapped-types';
import { CreateTabParceriaFastDto } from './create-tab_parceria_fast.dto';

export class UpdateTabParceriaFastDto extends PartialType(CreateTabParceriaFastDto) {}
