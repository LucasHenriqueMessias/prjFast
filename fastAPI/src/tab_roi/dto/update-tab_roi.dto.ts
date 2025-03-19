import { PartialType } from '@nestjs/mapped-types';
import { CreateTabRoiDto } from './create-tab_roi.dto';

export class UpdateTabRoiDto extends PartialType(CreateTabRoiDto) {}
