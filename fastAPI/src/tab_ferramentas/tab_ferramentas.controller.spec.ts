import { Test, TestingModule } from '@nestjs/testing';
import { TabFerramentasController } from './tab_ferramentas.controller';
import { TabFerramentasService } from './tab_ferramentas.service';

describe('TabFerramentasController', () => {
  let controller: TabFerramentasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TabFerramentasController],
      providers: [TabFerramentasService],
    }).compile();

    controller = module.get<TabFerramentasController>(TabFerramentasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
