import { PartialType } from '@nestjs/swagger';
import { CreateTabLogDto } from './create-tab_log.dto';

export class UpdateTabLogDto extends PartialType(CreateTabLogDto) {}
