import { Test, TestingModule } from '@nestjs/testing';
import { TabTiposMovimentacaoController } from './tab_tipos_movimentacao.controller';
import { TabTiposMovimentacaoService } from './tab_tipos_movimentacao.service';

describe('TabTiposMovimentacaoController', () => {
  let controller: TabTiposMovimentacaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TabTiposMovimentacaoController],
      providers: [TabTiposMovimentacaoService],
    }).compile();

    controller = module.get<TabTiposMovimentacaoController>(TabTiposMovimentacaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
