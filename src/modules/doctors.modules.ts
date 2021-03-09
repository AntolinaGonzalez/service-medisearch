import { DoctorsController } from '../controller/doctors.controller';
import { DoctorService } from '../service/doctor.service';
import { DoctorSchema } from '../schemas/doctors.schema';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [MongooseModule.forFeature([{ name: 'Doctor', schema: DoctorSchema }])],
  controllers: [DoctorsController],
  providers: [DoctorService],
})
export class DoctorsModule {}