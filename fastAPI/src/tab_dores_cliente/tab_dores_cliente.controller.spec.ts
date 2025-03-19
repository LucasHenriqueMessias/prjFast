import { Test, TestingModule } from '@nestjs/testing';
import { TabDoresClienteController } from './tab_dores_cliente.controller';
import { TabDoresClienteService } from './tab_dores_cliente.service';

describe('TabDoresClienteController', () => {
  let controller: TabDoresClienteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TabDoresClienteController],
      providers: [TabDoresClienteService],
    }).compile();

    controller = module.get<TabDoresClienteController>(TabDoresClienteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
