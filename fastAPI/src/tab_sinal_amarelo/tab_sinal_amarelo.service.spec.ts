import { Test, TestingModule } from '@nestjs/testing';
import { TabSinalAmareloService } from './tab_sinal_amarelo.service';

describe('TabSinalAmareloService', () => {
  let service: TabSinalAmareloService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TabSinalAmareloService],
    }).compile();

    service = module.get<TabSinalAmareloService>(TabSinalAmareloService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
