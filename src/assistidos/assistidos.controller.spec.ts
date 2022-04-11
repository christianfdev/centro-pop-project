import { Test, TestingModule } from '@nestjs/testing';
import { AssistidosController } from './assistidos.controller';
import { AssistidosService } from './assistidos.service';

describe('AssistidosController', () => {
  let controller: AssistidosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AssistidosController],
      providers: [AssistidosService],
    }).compile();

    controller = module.get<AssistidosController>(AssistidosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
