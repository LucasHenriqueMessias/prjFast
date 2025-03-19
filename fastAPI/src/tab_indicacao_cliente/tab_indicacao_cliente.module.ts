import { Module } from '@nestjs/common';
import { TabIndicacaoClienteService } from './tab_indicacao_cliente.service';
import { TabIndicacaoClienteController } from './tab_indicacao_cliente.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TabIndicacaoCliente } from './entities/tab_indicacao_cliente.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TabIndicacaoCliente])],
  controllers: [TabIndicacaoClienteController],
  providers: [TabIndicacaoClienteService],
})
export class TabIndicacaoClienteModule {}
