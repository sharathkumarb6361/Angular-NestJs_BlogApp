import { Test, TestingModule } from '@nestjs/testing';
import { BlogServiceService } from './blog-service.service';

describe('BlogServiceService', () => {
  let service: BlogServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlogServiceService],
    }).compile();

    service = module.get<BlogServiceService>(BlogServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
