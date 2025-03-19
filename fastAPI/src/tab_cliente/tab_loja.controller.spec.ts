import { Test, TestingModule } from '@nestjs/testing';
import { TabLojaController } from './tab_loja.controller';
import { TabLojaService } from './tab_loja.service';

describe('TabLojaController', () => {
  let controller: TabLojaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TabLojaController],
      providers: [TabLojaService],
    }).compile();

    controller = module.get<TabLojaController>(TabLojaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
