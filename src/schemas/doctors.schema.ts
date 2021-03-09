import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DoctorDocument = Doctor & Document;

@Schema()
export class Doctor {
  @Prop()
  first_name: string;

  @Prop()
  last_name: string;

  @Prop()
  address?: string;

  @Prop()
  speciality: string[];

  @Prop()
  health_care?: string[];

  @Prop()
  schedule?: Object[];

  @Prop()
  plus?: string;

  @Prop()
  cellphone?: string;

  @Prop()
  email?: string;

  @Prop()
  preferred_contact: string;

  @Prop()
  extras?: string;
}

export const DoctorSchema = SchemaFactory.createForClass(Doctor);