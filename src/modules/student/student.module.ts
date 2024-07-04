import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Students } from './entity/student.entity';
import { StudentsService } from './student.service';
import { StudentsController } from './student.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Students])],
  providers: [StudentsService],
  controllers: [StudentsController],
})
export class StudentModule {}
