import { Test, TestingModule } from '@nestjs/testing';
import { TabReuniaoController } from './tab_reuniao.controller';
import { TabReuniaoService } from './tab_reuniao.service';

describe('TabReuniaoController', () => {
  let controller: TabReuniaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TabReuniaoController],
      providers: [TabReuniaoService],
    }).compile();

    controller = module.get<TabReuniaoController>(TabReuniaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
