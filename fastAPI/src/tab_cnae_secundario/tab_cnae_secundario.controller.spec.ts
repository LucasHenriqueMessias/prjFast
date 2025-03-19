import { Test, TestingModule } from '@nestjs/testing';
import { TabCnaeSecundarioController } from './tab_cnae_secundario.controller';
import { TabCnaeSecundarioService } from './tab_cnae_secundario.service';

describe('TabCnaeSecundarioController', () => {
  let controller: TabCnaeSecundarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TabCnaeSecundarioController],
      providers: [TabCnaeSecundarioService],
    }).compile();

    controller = module.get<TabCnaeSecundarioController>(TabCnaeSecundarioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
