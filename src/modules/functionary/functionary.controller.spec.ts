import { Test, TestingModule } from '@nestjs/testing';
import { FunctionaryController } from './functionary.controller';
import { FunctionaryService } from './functionary.service';

describe('FunctionaryController', () => {
  let controller: FunctionaryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FunctionaryController],
      providers: [FunctionaryService],
    }).compile();

    controller = module.get<FunctionaryController>(FunctionaryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
