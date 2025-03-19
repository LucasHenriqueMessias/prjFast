import { Test, TestingModule } from '@nestjs/testing';
import { TabEventoController } from './tab_evento.controller';
import { TabEventoService } from './tab_evento.service';

describe('TabEventoController', () => {
  let controller: TabEventoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TabEventoController],
      providers: [TabEventoService],
    }).compile();

    controller = module.get<TabEventoController>(TabEventoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
