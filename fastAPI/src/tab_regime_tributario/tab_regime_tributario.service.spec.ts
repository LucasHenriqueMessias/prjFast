import { Test, TestingModule } from '@nestjs/testing';
import { TabRegimeTributarioService } from './tab_regime_tributario.service';

describe('TabRegimeTributarioService', () => {
  let service: TabRegimeTributarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TabRegimeTributarioService],
    }).compile();

    service = module.get<TabRegimeTributarioService>(TabRegimeTributarioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
