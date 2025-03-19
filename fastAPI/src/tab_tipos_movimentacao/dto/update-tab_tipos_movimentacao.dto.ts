import { PartialType } from '@nestjs/mapped-types';
import { CreateTabTiposMovimentacaoDto } from './create-tab_tipos_movimentacao.dto';

export class UpdateTabTiposMovimentacaoDto extends PartialType(CreateTabTiposMovimentacaoDto) {}
