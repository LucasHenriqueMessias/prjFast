import { Test, TestingModule } from '@nestjs/testing';
import { TabDoresClienteService } from './tab_dores_cliente.service';

describe('TabDoresClienteService', () => {
  let service: TabDoresClienteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TabDoresClienteService],
    }).compile();

    service = module.get<TabDoresClienteService>(TabDoresClienteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
