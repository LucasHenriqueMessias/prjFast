import { Test, TestingModule } from '@nestjs/testing';
import { TabFluxoCaixaController } from './tab_fluxo_caixa.controller';
import { TabFluxoCaixaService } from './tab_fluxo_caixa.service';

describe('TabFluxoCaixaController', () => {
  let controller: TabFluxoCaixaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TabFluxoCaixaController],
      providers: [TabFluxoCaixaService],
    }).compile();

    controller = module.get<TabFluxoCaixaController>(TabFluxoCaixaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
