import { Test, TestingModule } from '@nestjs/testing';
import { TabSociosService } from './tab_socios.service';

describe('TabSociosService', () => {
  let service: TabSociosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TabSociosService],
    }).compile();

    service = module.get<TabSociosService>(TabSociosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
