import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { closeInMongodConnection, rootMongooseTestModule } from './mongotest';
import { MongooseModule } from '@nestjs/mongoose';
import { DoctorSchema } from './../src/schemas/doctors.schema';
import { DoctorsService } from './../src/service/doctors.service';
const app = 'http://localhost:3500'
describe('AppController (e2e)', () => {
  
  let service: DoctorsService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        rootMongooseTestModule(),
        MongooseModule.forFeature([{ name: 'Doctor', schema: DoctorSchema }]),
      ],
      providers: [DoctorsService],
    }).compile();

    service = module.get<DoctorsService>(DoctorsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('/doctors (GET)', () => {
    return request(app)
      .get('/')
      .expect(200)
  });

  afterAll(async () => {
    await closeInMongodConnection();
  });
});
