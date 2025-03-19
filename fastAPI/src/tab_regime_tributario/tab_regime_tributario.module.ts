import { Module } from '@nestjs/common';
import { TabRegimeTributarioService } from './tab_regime_tributario.service';
import { TabRegimeTributarioController } from './tab_regime_tributario.controller';
import { TabRegimeTributario } from './entities/tab_regime_tributario.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TabRegimeTributario])],
  controllers: [TabRegimeTributarioController],
  providers: [TabRegimeTributarioService],
})
export class TabRegimeTributarioModule {}
