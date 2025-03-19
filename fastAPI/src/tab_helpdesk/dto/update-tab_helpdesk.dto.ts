import { PartialType } from '@nestjs/swagger';
import { CreateTabHelpdeskDto } from './create-tab_helpdesk.dto';

export class UpdateTabHelpdeskDto extends PartialType(CreateTabHelpdeskDto) {}
