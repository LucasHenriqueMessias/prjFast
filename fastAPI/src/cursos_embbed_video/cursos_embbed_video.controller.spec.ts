import { Test, TestingModule } from '@nestjs/testing';
import { CursosEmbbedVideoController } from './cursos_embbed_video.controller';
import { CursosEmbbedVideoService } from './cursos_embbed_video.service';

describe('CursosEmbbedVideoController', () => {
  let controller: CursosEmbbedVideoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CursosEmbbedVideoController],
      providers: [CursosEmbbedVideoService],
    }).compile();

    controller = module.get<CursosEmbbedVideoController>(CursosEmbbedVideoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
