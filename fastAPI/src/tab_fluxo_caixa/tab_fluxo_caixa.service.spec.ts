import { Test, TestingModule } from '@nestjs/testing';
import { TabFluxoCaixaService } from './tab_fluxo_caixa.service';

describe('TabFluxoCaixaService', () => {
  let service: TabFluxoCaixaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TabFluxoCaixaService],
    }).compile();

    service = module.get<TabFluxoCaixaService>(TabFluxoCaixaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
