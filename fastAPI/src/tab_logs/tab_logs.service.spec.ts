import { Test, TestingModule } from '@nestjs/testing';
import { TabLogsService } from './tab_logs.service';

describe('TabLogsService', () => {
  let service: TabLogsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TabLogsService],
    }).compile();

    service = module.get<TabLogsService>(TabLogsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
