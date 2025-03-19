import { Test, TestingModule } from '@nestjs/testing';
import { TabRegimeTributarioController } from './tab_regime_tributario.controller';
import { TabRegimeTributarioService } from './tab_regime_tributario.service';

describe('TabRegimeTributarioController', () => {
  let controller: TabRegimeTributarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TabRegimeTributarioController],
      providers: [TabRegimeTributarioService],
    }).compile();

    controller = module.get<TabRegimeTributarioController>(TabRegimeTributarioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
