import { PartialType } from '@nestjs/mapped-types';
import { CreateTabConsultorFinanceiroDto } from './create-tab_consultor_financeiro.dto';

export class UpdateTabConsultorFinanceiroDto extends PartialType(CreateTabConsultorFinanceiroDto) {}
