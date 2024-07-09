import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Subjects } from './entity/subject.entity';
import { Students } from '../student/entity/student.entity';

@Injectable()
export class SubjectsService {
  constructor(
    @InjectRepository(Subjects)
    private subjectsRepository: Repository<Subjects>,
    @InjectRepository(Students)
    private studentsRepository: Repository<Students>,
  ) {}

  findAll(): Promise<Subjects[]> {
    return this.subjectsRepository.find();
  }

  findOne(id: number): Promise<Subjects> {
    return this.subjectsRepository.findOne({
      where: { id },
      relations: ['student'],
    });
  }
  findByStudentIdAll(): Promise<Subjects[]> {
    return this.subjectsRepository.find({ relations: ['student'] });
  }



  findByStudentId(studentId: number): Promise<Subjects[]> {
    return this.subjectsRepository.find({
      where: { student: { id: studentId } },
      relations: ['student'],
    });
  }

  async create(subject: Subjects): Promise<Subjects> {
    const student = await this.studentsRepository.findOne({ where: { id: subject.student.id } });
    if (!student) {
      throw new Error('Student not found');
    }
    subject.student = student;
    return this.subjectsRepository.save(subject);
  }

  async update(id: number, subject: Partial<Subjects>): Promise<void> {
    await this.subjectsRepository.update(id, subject);
  }

  async remove(id: number): Promise<void> {
    await this.subjectsRepository.delete(id);
  }
}

////////////////////////////////////////////////////////////////////////////



// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { Subjects } from './entity/subject.entity';
// import { Students } from '../student/entity/student.entity';

// @Injectable()
// export class SubjectsService {
//   constructor(
//     @InjectRepository(Subjects)
//     private subjectsRepository: Repository<Subjects>,
//     @InjectRepository(Students)
//     private studentsRepository: Repository<Students>,
//   ) {}

//   findAll(): Promise<Subjects[]> {
//     return this.subjectsRepository.find();
//   }

//   findOne(id: number): Promise<Subjects> {
//     return this.subjectsRepository.findOneBy({ id });
//   }

//   async findByStudentId(studentId: number): Promise<Subjects[]> {
//     return this.subjectsRepository.find({
//       where: { student: { id: studentId } },
//       relations: ['student'],
//     });
//   }

//   async create(subject: Partial<Subjects>, studentId: number): Promise<Subjects> {
//     const student = await this.studentsRepository.findOneBy({ id: studentId });
//     if (!student) {
//       throw new Error('Student not found');
//     }
//     const newSubject = this.subjectsRepository.create({ ...subject, student });
//     return this.subjectsRepository.save(newSubject);
//   }

//   async update(id: number, subject: Partial<Subjects>): Promise<void> {
//     await this.subjectsRepository.update(id, subject);
//   }

//   async remove(id: number): Promise<void> {
//     await this.subjectsRepository.delete(id);
//   }
// }
// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { Subjects } from './entity/subject.entity';
// import { Students } from '../student/entity/student.entity';
// @Injectable()
// export class SubjectsService {
//   constructor(
//     @InjectRepository(Subjects)
//     private subjectsRepository: Repository<Subjects>,
//     @InjectRepository(Students)
//     private studentsRepository: Repository<Students>,
//   ) {}

//   findAll(): Promise<Subjects[]> {
//     return this.subjectsRepository.find({ relations: ['student'] });
//   }

//   findOne(id: number): Promise<Subjects> {
//     return this.subjectsRepository.findOne({
//       where: { id },
//       relations: ['student'],
//     });
//   }

//   async findByStudentId(studentId: number): Promise<Subjects[]> {
//     return this.subjectsRepository.find({
//       where: { student: { id: studentId } },
//       relations: ['student'],
//     });
//   }

//   async create(body: { maths: number; chemistry: number; physics: number; computerScience: number; studentId: number }): Promise<Subjects> {
//     const student = await this.studentsRepository.findOne({ where: { id: body.studentId } });
//     if (!student) {
//       throw new Error('Student not found');
//     }
//     const newSubject = this.subjectsRepository.create({ 
//       Maths: body.maths, 
//       Chemistry: body.chemistry, 
//       Physics: body.physics, 
//       ComputerScience: body.computerScience, 
//       student: student 
//     });
//     return this.subjectsRepository.save(newSubject);
//   }

//   async update(id: number, subject: Partial<Subjects>): Promise<void> {
//     await this.subjectsRepository.update(id, subject);
//   }

//   async remove(id: number): Promise<void> {
//     await this.subjectsRepository.delete(id);
//   }
// }



