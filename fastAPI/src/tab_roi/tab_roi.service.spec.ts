import { Test, TestingModule } from '@nestjs/testing';
import { TabRoiService } from './tab_roi.service';

describe('TabRoiService', () => {
  let service: TabRoiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TabRoiService],
    }).compile();

    service = module.get<TabRoiService>(TabRoiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
