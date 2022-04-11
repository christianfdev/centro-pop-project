import { Test, TestingModule } from '@nestjs/testing';
import { AssistedController } from './assisted.controller';
import { AssistedService } from './assisted.service';

describe('AssistedController', () => {
  let controller: AssistedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AssistedController],
      providers: [AssistedService],
    }).compile();

    controller = module.get<AssistedController>(AssistedController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
