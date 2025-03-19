import { Test, TestingModule } from '@nestjs/testing';
import { TabSociosController } from './tab_socios.controller';
import { TabSociosService } from './tab_socios.service';

describe('TabSociosController', () => {
  let controller: TabSociosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TabSociosController],
      providers: [TabSociosService],
    }).compile();

    controller = module.get<TabSociosController>(TabSociosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
