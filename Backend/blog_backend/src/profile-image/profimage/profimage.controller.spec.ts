import { Test, TestingModule } from '@nestjs/testing';
import { ProfimageController } from './profimage.controller';

describe('ProfimageController', () => {
  let controller: ProfimageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProfimageController],
    }).compile();

    controller = module.get<ProfimageController>(ProfimageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
