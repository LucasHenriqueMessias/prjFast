import { Test, TestingModule } from '@nestjs/testing';
import { TabConsultorComercialController } from './tab_consultor_comercial.controller';
import { TabConsultorComercialService } from './tab_consultor_comercial.service';
import { TabConsultorComercial } from './entities/tab_consultor_comercial.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

describe('TabConsultorComercialController', () => {
  let controller: TabConsultorComercialController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TypeOrmModule.forFeature([TabConsultorComercial])],
      controllers: [TabConsultorComercialController],
      providers: [TabConsultorComercialService],
    }).compile();

    controller = module.get<TabConsultorComercialController>(TabConsultorComercialController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
