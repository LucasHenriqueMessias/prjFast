import { Test, TestingModule } from '@nestjs/testing';
import { TabUploadController } from './tab_upload.controller';
import { TabUploadService } from './tab_upload.service';

describe('TabUploadController', () => {
  let controller: TabUploadController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TabUploadController],
      providers: [TabUploadService],
    }).compile();

    controller = module.get<TabUploadController>(TabUploadController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
