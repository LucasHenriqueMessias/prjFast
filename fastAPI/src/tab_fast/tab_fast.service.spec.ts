import { Test, TestingModule } from '@nestjs/testing';
import { TabFastService } from './tab_fast.service';

describe('TabFastService', () => {
  let service: TabFastService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TabFastService],
    }).compile();

    service = module.get<TabFastService>(TabFastService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
