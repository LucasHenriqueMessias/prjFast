import { PartialType } from '@nestjs/swagger';
import { CreateTabNotificacaoDto } from './create-tab_notificacao.dto';

export class UpdateTabNotificacaoDto extends PartialType(CreateTabNotificacaoDto) {}
