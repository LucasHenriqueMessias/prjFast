import { Test, TestingModule } from '@nestjs/testing';
import { TabNotificacaoService } from './tab_notificacao.service';

describe('TabNotificacaoService', () => {
  let service: TabNotificacaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TabNotificacaoService],
    }).compile();

    service = module.get<TabNotificacaoService>(TabNotificacaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
