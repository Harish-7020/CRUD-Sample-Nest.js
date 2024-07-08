import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Students } from './entity/student.entity';
import { StudentsService } from './student.service';
import { StudentsController } from './student.controller';
import { Subjects } from '../subject/entity/subject.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Students,Subjects])],
  providers: [StudentsService],
  controllers: [StudentsController],
})
export class StudentModule {}
