import { Test, TestingModule } from '@nestjs/testing';
import { TabDreService } from './tab_dre.service';

describe('TabDreService', () => {
  let service: TabDreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TabDreService],
    }).compile();

    service = module.get<TabDreService>(TabDreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
