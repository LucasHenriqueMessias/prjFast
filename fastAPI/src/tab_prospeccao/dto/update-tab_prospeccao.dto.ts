import { PartialType } from '@nestjs/mapped-types';
import { CreateTabProspeccaoDto } from './create-tab_prospeccao.dto';

export class UpdateTabProspeccaoDto extends PartialType(CreateTabProspeccaoDto) {}
