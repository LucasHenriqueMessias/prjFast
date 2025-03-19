import { PartialType } from '@nestjs/mapped-types';
import { CreateTabAnalistaFinanceiroDto } from './create-tab_analista_financeiro.dto';

export class UpdateTabAnalistaFinanceiroDto extends PartialType(CreateTabAnalistaFinanceiroDto) {}
