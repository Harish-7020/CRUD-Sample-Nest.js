import { Module } from '@nestjs/common';
import { SubjectsController } from './subject.controller';
import { SubjectsService } from './subject.service';
import { Subjects } from './entity/subject.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Students } from '../student/entity/student.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Subjects, Students])],

  controllers: [SubjectsController],
  providers: [SubjectsService]
})
export class SubjectModule {}
