import { PartialType } from '@nestjs/mapped-types';
import { CreateTabLojaDto } from './create-tab_loja.dto';

export class UpdateTabLojaDto extends PartialType(CreateTabLojaDto) {}
