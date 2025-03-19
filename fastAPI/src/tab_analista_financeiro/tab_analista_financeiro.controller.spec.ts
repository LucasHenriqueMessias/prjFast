import { Test, TestingModule } from '@nestjs/testing';
import { TabAnalistaFinanceiroController } from './tab_analista_financeiro.controller';
import { TabAnalistaFinanceiroService } from './tab_analista_financeiro.service';

describe('TabAnalistaFinanceiroController', () => {
  let controller: TabAnalistaFinanceiroController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TabAnalistaFinanceiroController],
      providers: [TabAnalistaFinanceiroService],
    }).compile();

    controller = module.get<TabAnalistaFinanceiroController>(TabAnalistaFinanceiroController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
