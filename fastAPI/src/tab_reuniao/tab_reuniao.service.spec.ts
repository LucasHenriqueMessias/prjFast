import { Test, TestingModule } from '@nestjs/testing';
import { TabReuniaoService } from './tab_reuniao.service';

describe('TabReuniaoService', () => {
  let service: TabReuniaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TabReuniaoService],
    }).compile();

    service = module.get<TabReuniaoService>(TabReuniaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
