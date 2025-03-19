import { Test, TestingModule } from '@nestjs/testing';
import { TabSucessoClienteController } from './tab_sucesso_cliente.controller';
import { TabSucessoClienteService } from './tab_sucesso_cliente.service';

describe('TabSucessoClienteController', () => {
  let controller: TabSucessoClienteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TabSucessoClienteController],
      providers: [TabSucessoClienteService],
    }).compile();

    controller = module.get<TabSucessoClienteController>(TabSucessoClienteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
