import { PartialType } from '@nestjs/swagger';
import { CreateTabChecklistReuniaoDto } from './create-tab_checklist_reuniao.dto';

export class UpdateTabChecklistReuniaoDto extends PartialType(CreateTabChecklistReuniaoDto) {}
