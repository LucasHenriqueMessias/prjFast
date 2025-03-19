import { Test, TestingModule } from '@nestjs/testing';
import { TabChecklistReuniaoService } from './tab_checklist_reuniao.service';

describe('TabChecklistReuniaoService', () => {
  let service: TabChecklistReuniaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TabChecklistReuniaoService],
    }).compile();

    service = module.get<TabChecklistReuniaoService>(TabChecklistReuniaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
