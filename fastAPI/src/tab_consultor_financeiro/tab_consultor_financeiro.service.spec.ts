import { Test, TestingModule } from '@nestjs/testing';
import { TabConsultorFinanceiroService } from './tab_consultor_financeiro.service';

describe('TabConsultorFinanceiroService', () => {
  let service: TabConsultorFinanceiroService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TabConsultorFinanceiroService],
    }).compile();

    service = module.get<TabConsultorFinanceiroService>(TabConsultorFinanceiroService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
