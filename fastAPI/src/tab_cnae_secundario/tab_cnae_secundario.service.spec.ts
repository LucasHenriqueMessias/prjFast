import { Test, TestingModule } from '@nestjs/testing';
import { TabCnaeSecundarioService } from './tab_cnae_secundario.service';

describe('TabCnaeSecundarioService', () => {
  let service: TabCnaeSecundarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TabCnaeSecundarioService],
    }).compile();

    service = module.get<TabCnaeSecundarioService>(TabCnaeSecundarioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
