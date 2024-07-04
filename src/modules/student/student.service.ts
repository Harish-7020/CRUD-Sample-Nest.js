import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Students } from './entity/student.entity';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Students)
    private studentsRepository: Repository<Students>,
  ) {}

  async findAll(): Promise<Students[]> {
    return await this.studentsRepository.find();
  }

  async findOne(StudentID: number): Promise<Students> {
    return await this.studentsRepository.findOne({ where: { StudentID } });
  }

  async create(studentData: Partial<Students>): Promise<Students> {
    const student = this.studentsRepository.create(studentData);
    return await this.studentsRepository.save(student);
  }

  async update(StudentID: number, studentData: Partial<Students>): Promise<Students> {
    await this.studentsRepository.update(StudentID, studentData);
    return this.findOne(StudentID);
  }

  async delete(StudentID: number): Promise<void> {
    await this.studentsRepository.delete(StudentID);
  }
}
