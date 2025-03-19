import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TabFotografiaClienteService } from './tab_fotografia_cliente.service';
import { TabFotografiaClienteController } from './tab_fotografia_cliente.controller';
import { TabFotografiaCliente } from './entities/tab_fotografia_cliente.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TabFotografiaCliente])],
  controllers: [TabFotografiaClienteController],
  providers: [TabFotografiaClienteService],
})
export class TabFotografiaClienteModule {}