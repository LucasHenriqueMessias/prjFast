import { Test, TestingModule } from '@nestjs/testing';
import { TabHelpdeskService } from './tab_helpdesk.service';

describe('TabHelpdeskService', () => {
  let service: TabHelpdeskService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TabHelpdeskService],
    }).compile();

    service = module.get<TabHelpdeskService>(TabHelpdeskService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
