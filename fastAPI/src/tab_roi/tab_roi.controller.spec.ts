import { Test, TestingModule } from '@nestjs/testing';
import { TabRoiController } from './tab_roi.controller';
import { TabRoiService } from './tab_roi.service';

describe('TabRoiController', () => {
  let controller: TabRoiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TabRoiController],
      providers: [TabRoiService],
    }).compile();

    controller = module.get<TabRoiController>(TabRoiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
