import { Test, TestingModule } from '@nestjs/testing';
import { TabConsultorFinanceiroController } from './tab_consultor_financeiro.controller';
import { TabConsultorFinanceiroService } from './tab_consultor_financeiro.service';

describe('TabConsultorFinanceiroController', () => {
  let controller: TabConsultorFinanceiroController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TabConsultorFinanceiroController],
      providers: [TabConsultorFinanceiroService],
    }).compile();

    controller = module.get<TabConsultorFinanceiroController>(TabConsultorFinanceiroController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
