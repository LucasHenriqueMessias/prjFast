import { Test, TestingModule } from '@nestjs/testing';
import { TabHelpdeskController } from './tab_helpdesk.controller';
import { TabHelpdeskService } from './tab_helpdesk.service';

describe('TabHelpdeskController', () => {
  let controller: TabHelpdeskController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TabHelpdeskController],
      providers: [TabHelpdeskService],
    }).compile();

    controller = module.get<TabHelpdeskController>(TabHelpdeskController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
