import { DoctorsModule } from './modules/doctors.modules';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'), DoctorsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
