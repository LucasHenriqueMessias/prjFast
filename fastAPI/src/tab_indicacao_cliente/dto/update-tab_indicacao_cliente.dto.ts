import { PartialType } from '@nestjs/mapped-types';
import { CreateTabIndicacaoClienteDto } from './create-tab_indicacao_cliente.dto';

export class UpdateTabIndicacaoClienteDto extends PartialType(CreateTabIndicacaoClienteDto) {}
