import { Test, TestingModule } from '@nestjs/testing';
import { TabNotificacaoController } from './tab_notificacao.controller';
import { TabNotificacaoService } from './tab_notificacao.service';

describe('TabNotificacaoController', () => {
  let controller: TabNotificacaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TabNotificacaoController],
      providers: [TabNotificacaoService],
    }).compile();

    controller = module.get<TabNotificacaoController>(TabNotificacaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
