import { Test, TestingModule } from '@nestjs/testing';
import { TabLojaService } from './tab_loja.service';

describe('TabLojaService', () => {
  let service: TabLojaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TabLojaService],
    }).compile();

    service = module.get<TabLojaService>(TabLojaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
