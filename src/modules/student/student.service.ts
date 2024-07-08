// import { Injectable, NotFoundException } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { Students } from './entity/student.entity';
// import { Subjects } from '../subject/entity/subject.entity';

// @Injectable()
// export class StudentsService {
//   constructor(
//     @InjectRepository(Students)
//     private StudentsRepository: Repository<Students>,
//     @InjectRepository(Subjects)
//     private subjectsRepository: Repository<Subjects>,

//   ) {}

//   async findAll(): Promise<Students[]> {
//     return await this.StudentsRepository.find();
//   }

//   async findOne(StudentID: number): Promise<Students> {
//     return await this.StudentsRepository.findOne({ where: { StudentID } });
//   }

//   async create(studentData: Partial<Students>): Promise<Students> {
//     const student = this.StudentsRepository.create(studentData);
//     return await this.StudentsRepository.save(student);
//   }

//   async update(StudentID: number, studentData: Partial<Students>): Promise<Students> {
//     await this.StudentsRepository.update(StudentID, studentData);
//     return this.findOne(StudentID);
//   }

//   async delete(StudentID: number): Promise<void> {
//     await this.StudentsRepository.delete(StudentID);
//   }
//   async findSubjectsByStudentID(StudentID: number): Promise<Subjects[]> {
//     const student = await this.StudentsRepository.findOne({
//       where: { StudentID },
//       relations: ['subjects'],
//     });
//     if (!student) {
//       throw new NotFoundException(`Student with ID ${StudentID} not found`);
//     }
//     return student.subjects;
//   }

// }
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Students } from './entity/student.entity';
import { Subjects } from '../subject/entity/subject.entity';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Students)
    private studentsRepository: Repository<Students>,
    @InjectRepository(Subjects)
    private subjectsRepository: Repository<Subjects>,

  ) {}

  findAll(): Promise<Students[]> {
    return this.studentsRepository.find();
  }

  findOne(id: number): Promise<Students> {
    return this.studentsRepository.findOne({
      where: { id },
      relations: ['subjects'],
    });
  }
  create(student: Students): Promise<Students> {
    return this.studentsRepository.save(student);
  }

  async update(id: number, student: Partial<Students>): Promise<void> {
    await this.studentsRepository.update(id, student);
  }

  async remove(id: number): Promise<void> {
    await this.subjectsRepository.delete({ student: { id } });
    await this.studentsRepository.delete(id);
  }
  }

