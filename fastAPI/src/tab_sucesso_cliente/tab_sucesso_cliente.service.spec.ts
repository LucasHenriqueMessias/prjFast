import { Test, TestingModule } from '@nestjs/testing';
import { TabSucessoClienteService } from './tab_sucesso_cliente.service';

describe('TabSucessoClienteService', () => {
  let service: TabSucessoClienteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TabSucessoClienteService],
    }).compile();

    service = module.get<TabSucessoClienteService>(TabSucessoClienteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
