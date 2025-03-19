import { Test, TestingModule } from '@nestjs/testing';
import { TabParceriaFastController } from './tab_parceria_fast.controller';
import { TabParceriaFastService } from './tab_parceria_fast.service';

describe('TabParceriaFastController', () => {
  let controller: TabParceriaFastController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TabParceriaFastController],
      providers: [TabParceriaFastService],
    }).compile();

    controller = module.get<TabParceriaFastController>(TabParceriaFastController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
