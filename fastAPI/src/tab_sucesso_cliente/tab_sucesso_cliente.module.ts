import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TabSucessoClienteService } from './tab_sucesso_cliente.service';
import { TabSucessoClienteController } from './tab_sucesso_cliente.controller';
import { TabSucessoCliente } from './entities/tab_sucesso_cliente.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TabSucessoCliente])],
  controllers: [TabSucessoClienteController],
  providers: [TabSucessoClienteService],
})
export class TabSucessoClienteModule {}