import { Test, TestingModule } from '@nestjs/testing';
import { FunctionaryService } from './functionary.service';

describe('FunctionaryService', () => {
  let service: FunctionaryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FunctionaryService],
    }).compile();

    service = module.get<FunctionaryService>(FunctionaryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
