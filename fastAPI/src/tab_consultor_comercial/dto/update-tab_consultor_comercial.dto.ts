import { PartialType } from '@nestjs/mapped-types';
import { CreateTabConsultorComercialDto } from './create-tab_consultor_comercial.dto';

export class UpdateTabConsultorComercialDto extends PartialType(CreateTabConsultorComercialDto) {}
