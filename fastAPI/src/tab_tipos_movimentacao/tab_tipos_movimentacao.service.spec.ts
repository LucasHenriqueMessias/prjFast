import { Test, TestingModule } from '@nestjs/testing';
import { TabTiposMovimentacaoService } from './tab_tipos_movimentacao.service';

describe('TabTiposMovimentacaoService', () => {
  let service: TabTiposMovimentacaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TabTiposMovimentacaoService],
    }).compile();

    service = module.get<TabTiposMovimentacaoService>(TabTiposMovimentacaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
