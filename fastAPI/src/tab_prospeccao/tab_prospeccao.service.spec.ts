import { Test, TestingModule } from '@nestjs/testing';
import { TabProspeccaoService } from './tab_prospeccao.service';

describe('TabProspeccaoService', () => {
  let service: TabProspeccaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TabProspeccaoService],
    }).compile();

    service = module.get<TabProspeccaoService>(TabProspeccaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
