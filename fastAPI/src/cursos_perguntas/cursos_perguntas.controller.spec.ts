import { Test, TestingModule } from '@nestjs/testing';
import { CursosPerguntasController } from './cursos_perguntas.controller';
import { CursosPerguntasService } from './cursos_perguntas.service';

describe('CursosPerguntasController', () => {
  let controller: CursosPerguntasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CursosPerguntasController],
      providers: [CursosPerguntasService],
    }).compile();

    controller = module.get<CursosPerguntasController>(CursosPerguntasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
