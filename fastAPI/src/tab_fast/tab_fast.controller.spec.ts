import { Test, TestingModule } from '@nestjs/testing';
import { TabFastController } from './tab_fast.controller';
import { TabFastService } from './tab_fast.service';

describe('TabFastController', () => {
  let controller: TabFastController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TabFastController],
      providers: [TabFastService],
    }).compile();

    controller = module.get<TabFastController>(TabFastController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
