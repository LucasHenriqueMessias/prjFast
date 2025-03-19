import { Test, TestingModule } from '@nestjs/testing';
import { TabConsultorComercialService } from './tab_consultor_comercial.service';

describe('TabConsultorComercialService', () => {
  let service: TabConsultorComercialService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TabConsultorComercialService],
    }).compile();

    service = module.get<TabConsultorComercialService>(TabConsultorComercialService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
