import { Test, TestingModule } from '@nestjs/testing';
import { TabAnalistaFinanceiroService } from './tab_analista_financeiro.service';

describe('TabAnalistaFinanceiroService', () => {
  let service: TabAnalistaFinanceiroService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TabAnalistaFinanceiroService],
    }).compile();

    service = module.get<TabAnalistaFinanceiroService>(TabAnalistaFinanceiroService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
