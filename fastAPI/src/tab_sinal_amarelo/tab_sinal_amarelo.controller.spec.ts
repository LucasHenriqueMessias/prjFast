import { Test, TestingModule } from '@nestjs/testing';
import { TabSinalAmareloController } from './tab_sinal_amarelo.controller';
import { TabSinalAmareloService } from './tab_sinal_amarelo.service';

describe('TabSinalAmareloController', () => {
  let controller: TabSinalAmareloController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TabSinalAmareloController],
      providers: [TabSinalAmareloService],
    }).compile();

    controller = module.get<TabSinalAmareloController>(TabSinalAmareloController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
