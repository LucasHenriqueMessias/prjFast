import { Module } from '@nestjs/common';
import { TabCnaeSecundarioService } from './tab_cnae_secundario.service';
import { TabCnaeSecundarioController } from './tab_cnae_secundario.controller';
import { TabCnaeSecundario } from './entities/tab_cnae_secundario.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TabCnaeSecundario])],
  controllers: [TabCnaeSecundarioController],
  providers: [TabCnaeSecundarioService],
})
export class TabCnaeSecundarioModule {}
