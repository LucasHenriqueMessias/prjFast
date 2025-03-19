import { PartialType } from '@nestjs/mapped-types';
import { CreateTabReuniaoDto } from './create-tab_reuniao.dto';

export class UpdateTabReuniaoDto extends PartialType(CreateTabReuniaoDto) {}
