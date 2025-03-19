import { Test, TestingModule } from '@nestjs/testing';
import { TabDreController } from './tab_dre.controller';
import { TabDreService } from './tab_dre.service';

describe('TabDreController', () => {
  let controller: TabDreController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TabDreController],
      providers: [TabDreService],
    }).compile();

    controller = module.get<TabDreController>(TabDreController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
