import { PartialType } from '@nestjs/mapped-types';
import { CreateTabCnaeSecundarioDto } from './create-tab_cnae_secundario.dto';

export class UpdateTabCnaeSecundarioDto extends PartialType(CreateTabCnaeSecundarioDto) {}
