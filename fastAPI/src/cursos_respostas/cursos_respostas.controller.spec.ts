import { Test, TestingModule } from '@nestjs/testing';
import { CursosRespostasController } from './cursos_respostas.controller';
import { CursosRespostasService } from './cursos_respostas.service';

describe('CursosRespostasController', () => {
  let controller: CursosRespostasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CursosRespostasController],
      providers: [CursosRespostasService],
    }).compile();

    controller = module.get<CursosRespostasController>(CursosRespostasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
