import { Test, TestingModule } from '@nestjs/testing';
import { TabParceriaFastService } from './tab_parceria_fast.service';

describe('TabParceriaFastService', () => {
  let service: TabParceriaFastService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TabParceriaFastService],
    }).compile();

    service = module.get<TabParceriaFastService>(TabParceriaFastService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
