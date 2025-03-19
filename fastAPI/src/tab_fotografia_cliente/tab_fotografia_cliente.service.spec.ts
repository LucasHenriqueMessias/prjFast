import { Test, TestingModule } from '@nestjs/testing';
import { TabFotografiaClienteService } from './tab_fotografia_cliente.service';

describe('TabFotografiaClienteService', () => {
  let service: TabFotografiaClienteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TabFotografiaClienteService],
    }).compile();

    service = module.get<TabFotografiaClienteService>(TabFotografiaClienteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
