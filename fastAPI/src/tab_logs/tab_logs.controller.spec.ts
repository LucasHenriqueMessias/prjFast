import { Test, TestingModule } from '@nestjs/testing';
import { TabLogsController } from './tab_logs.controller';
import { TabLogsService } from './tab_logs.service';

describe('TabLogsController', () => {
  let controller: TabLogsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TabLogsController],
      providers: [TabLogsService],
    }).compile();

    controller = module.get<TabLogsController>(TabLogsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
