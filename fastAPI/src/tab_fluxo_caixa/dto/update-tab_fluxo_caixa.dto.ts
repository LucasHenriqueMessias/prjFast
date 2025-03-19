import { PartialType } from '@nestjs/mapped-types';
import { CreateTabFluxoCaixaDto } from './create-tab_fluxo_caixa.dto';

export class UpdateTabFluxoCaixaDto extends PartialType(CreateTabFluxoCaixaDto) {}
