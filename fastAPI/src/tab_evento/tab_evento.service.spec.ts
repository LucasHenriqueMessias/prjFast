import { Test, TestingModule } from '@nestjs/testing';
import { TabEventoService } from './tab_evento.service';

describe('TabEventoService', () => {
  let service: TabEventoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TabEventoService],
    }).compile();

    service = module.get<TabEventoService>(TabEventoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
