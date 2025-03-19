import { Module } from '@nestjs/common';
import { TabSociosService } from './tab_socios.service';
import { TabSociosController } from './tab_socios.controller';
import { TabSocio } from './entities/tab_socio.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TabSocio])],
  controllers: [TabSociosController],
  providers: [TabSociosService],
})
export class TabSociosModule {}
