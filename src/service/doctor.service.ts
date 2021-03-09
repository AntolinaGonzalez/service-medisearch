import { Doctor, DoctorDocument } from '../schemas/doctors.schema';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Doctordto } from 'src/dtos/doctors.dto';


@Injectable()
export class DoctorService {
  constructor(@InjectModel('Doctor') private doctorModel: Model<DoctorDocument>) {}

  async create(createDoctor: Doctordto): Promise<Doctor> {
    const createdDoctor = new this.doctorModel(createDoctor);
    return createdDoctor.save();
  }

  async findAll(): Promise<Doctor[]> {
    return this.doctorModel.find().exec();
  }
}
