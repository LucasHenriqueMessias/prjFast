import { PartialType } from '@nestjs/mapped-types';
import { CreateTabSocioDto } from './create-tab_socio.dto';

export class UpdateTabSocioDto extends PartialType(CreateTabSocioDto) {}
