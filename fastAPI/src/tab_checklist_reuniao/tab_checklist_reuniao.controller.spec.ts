import { Test, TestingModule } from '@nestjs/testing';
import { TabChecklistReuniaoController } from './tab_checklist_reuniao.controller';
import { TabChecklistReuniaoService } from './tab_checklist_reuniao.service';

describe('TabChecklistReuniaoController', () => {
  let controller: TabChecklistReuniaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TabChecklistReuniaoController],
      providers: [TabChecklistReuniaoService],
    }).compile();

    controller = module.get<TabChecklistReuniaoController>(TabChecklistReuniaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
