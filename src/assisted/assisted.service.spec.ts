import { Test, TestingModule } from '@nestjs/testing';
import { AssistedService } from './assisted.service';

describe('AssistedService', () => {
  let service: AssistedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AssistedService],
    }).compile();

    service = module.get<AssistedService>(AssistedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
