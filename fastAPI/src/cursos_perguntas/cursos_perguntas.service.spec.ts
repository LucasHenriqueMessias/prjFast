import { Test, TestingModule } from '@nestjs/testing';
import { CursosPerguntasService } from './cursos_perguntas.service';

describe('CursosPerguntasService', () => {
  let service: CursosPerguntasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CursosPerguntasService],
    }).compile();

    service = module.get<CursosPerguntasService>(CursosPerguntasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
