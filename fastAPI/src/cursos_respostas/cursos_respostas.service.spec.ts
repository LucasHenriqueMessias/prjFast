import { Test, TestingModule } from '@nestjs/testing';
import { CursosRespostasService } from './cursos_respostas.service';

describe('CursosRespostasService', () => {
  let service: CursosRespostasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CursosRespostasService],
    }).compile();

    service = module.get<CursosRespostasService>(CursosRespostasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
