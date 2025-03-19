import { Test, TestingModule } from '@nestjs/testing';
import { TabContratoService } from './tab_contrato.service';

describe('TabContratoService', () => {
  let service: TabContratoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TabContratoService],
    }).compile();

    service = module.get<TabContratoService>(TabContratoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
