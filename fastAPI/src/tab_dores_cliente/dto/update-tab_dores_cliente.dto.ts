import { PartialType } from '@nestjs/mapped-types';
import { CreateTabDoresClienteDto } from './create-tab_dores_cliente.dto';

export class UpdateTabDoresClienteDto extends PartialType(CreateTabDoresClienteDto) {}
