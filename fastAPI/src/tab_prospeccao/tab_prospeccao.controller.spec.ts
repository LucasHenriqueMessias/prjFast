import { Test, TestingModule } from '@nestjs/testing';
import { TabProspeccaoController } from './tab_prospeccao.controller';
import { TabProspeccaoService } from './tab_prospeccao.service';

describe('TabProspeccaoController', () => {
  let controller: TabProspeccaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TabProspeccaoController],
      providers: [TabProspeccaoService],
    }).compile();

    controller = module.get<TabProspeccaoController>(TabProspeccaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
