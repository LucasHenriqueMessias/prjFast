import { Test, TestingModule } from '@nestjs/testing';
import { TabIndicacaoClienteController } from './tab_indicacao_cliente.controller';
import { TabIndicacaoClienteService } from './tab_indicacao_cliente.service';

describe('TabIndicacaoClienteController', () => {
  let controller: TabIndicacaoClienteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TabIndicacaoClienteController],
      providers: [TabIndicacaoClienteService],
    }).compile();

    controller = module.get<TabIndicacaoClienteController>(TabIndicacaoClienteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
