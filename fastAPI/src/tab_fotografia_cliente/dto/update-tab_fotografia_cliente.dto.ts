import { PartialType } from '@nestjs/mapped-types';
import { CreateTabFotografiaClienteDto } from './create-tab_fotografia_cliente.dto';

export class UpdateTabFotografiaClienteDto extends PartialType(CreateTabFotografiaClienteDto) {}
