import { Test, TestingModule } from '@nestjs/testing';
import { TabUploadService } from './tab_upload.service';

describe('TabUploadService', () => {
  let service: TabUploadService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TabUploadService],
    }).compile();

    service = module.get<TabUploadService>(TabUploadService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
