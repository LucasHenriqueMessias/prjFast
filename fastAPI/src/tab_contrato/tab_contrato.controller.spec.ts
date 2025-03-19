import { Test, TestingModule } from '@nestjs/testing';
import { TabContratoController } from './tab_contrato.controller';
import { TabContratoService } from './tab_contrato.service';

describe('TabContratoController', () => {
  let controller: TabContratoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TabContratoController],
      providers: [TabContratoService],
    }).compile();

    controller = module.get<TabContratoController>(TabContratoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
