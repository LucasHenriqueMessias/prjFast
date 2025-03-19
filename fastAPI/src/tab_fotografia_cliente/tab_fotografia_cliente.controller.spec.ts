import { Test, TestingModule } from '@nestjs/testing';
import { TabFotografiaClienteController } from './tab_fotografia_cliente.controller';
import { TabFotografiaClienteService } from './tab_fotografia_cliente.service';

describe('TabFotografiaClienteController', () => {
  let controller: TabFotografiaClienteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TabFotografiaClienteController],
      providers: [TabFotografiaClienteService],
    }).compile();

    controller = module.get<TabFotografiaClienteController>(TabFotografiaClienteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
