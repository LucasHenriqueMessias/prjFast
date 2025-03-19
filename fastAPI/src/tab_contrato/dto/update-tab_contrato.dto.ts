import { PartialType } from '@nestjs/mapped-types';
import { CreateTabContratoDto } from './create-tab_contrato.dto';

export class UpdateTabContratoDto extends PartialType(CreateTabContratoDto) {}
