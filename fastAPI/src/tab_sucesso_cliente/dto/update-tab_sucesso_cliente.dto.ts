import { PartialType } from '@nestjs/mapped-types';
import { CreateTabSucessoClienteDto } from './create-tab_sucesso_cliente.dto';

export class UpdateTabSucessoClienteDto extends PartialType(CreateTabSucessoClienteDto) {}
