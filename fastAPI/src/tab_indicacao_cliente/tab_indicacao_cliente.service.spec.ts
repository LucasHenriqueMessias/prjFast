import { Test, TestingModule } from '@nestjs/testing';
import { TabIndicacaoClienteService } from './tab_indicacao_cliente.service';

describe('TabIndicacaoClienteService', () => {
  let service: TabIndicacaoClienteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TabIndicacaoClienteService],
    }).compile();

    service = module.get<TabIndicacaoClienteService>(TabIndicacaoClienteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
