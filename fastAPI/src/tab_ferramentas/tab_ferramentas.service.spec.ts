import { Test, TestingModule } from '@nestjs/testing';
import { TabFerramentasService } from './tab_ferramentas.service';

describe('TabFerramentasService', () => {
  let service: TabFerramentasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TabFerramentasService],
    }).compile();

    service = module.get<TabFerramentasService>(TabFerramentasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
