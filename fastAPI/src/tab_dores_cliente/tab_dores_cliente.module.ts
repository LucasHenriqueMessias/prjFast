
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TabDoresClienteService } from './tab_dores_cliente.service';
import { TabDoresClienteController } from './tab_dores_cliente.controller';
import { TabDoresCliente } from './entities/tab_dores_cliente.entity';


@Module({
  imports: [TypeOrmModule.forFeature([TabDoresCliente])],
  controllers: [TabDoresClienteController],
  providers: [TabDoresClienteService],
})
export class TabDoresClienteModule {}