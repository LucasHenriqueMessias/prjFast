import { Test, TestingModule } from '@nestjs/testing';
import { CursosEmbbedVideoService } from './cursos_embbed_video.service';

describe('CursosEmbbedVideoService', () => {
  let service: CursosEmbbedVideoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CursosEmbbedVideoService],
    }).compile();

    service = module.get<CursosEmbbedVideoService>(CursosEmbbedVideoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
