import { Doctor } from '../schemas/doctors.schema';
import { Doctordto } from '../dtos/doctors.dto';
import { DoctorService } from '../service/doctor.service';
import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('doctors')
export class DoctorsController {
  constructor(private doctorService: DoctorService) {}

  @Post()
  async create(@Body() createDoctor: Doctordto) {
    return await this.doctorService.create(createDoctor);
  }

  @Get()
  async findAll(): Promise<Doctor[]> {
    return await this.doctorService.findAll();
  }
}