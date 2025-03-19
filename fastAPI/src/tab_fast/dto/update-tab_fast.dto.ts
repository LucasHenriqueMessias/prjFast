import { PartialType } from '@nestjs/mapped-types';
import { CreateTabFastDto } from './create-tab_fast.dto';

export class UpdateTabFastDto extends PartialType(CreateTabFastDto) {}
