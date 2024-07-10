import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { StudentsService } from './student.service';
import { Students } from './entity/student.entity';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Get()
  async findAll() {
    return this.studentsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.studentsService.findOne(id);
  }

  @Post()
  async create(@Body() createStudentDto : CreateStudentDto) {
    return this.studentsService.create(createStudentDto);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateStudentDto: UpdateStudentDto) {
    return this.studentsService.update(id, updateStudentDto);
  }

  
  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.studentsService.remove(id);
  }
}


// import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
// import { StudentsService } from './student.service';
// import { Students } from './entity/student.entity';
// import { Subjects } from '../subject/entity/subject.entity';

// @Controller('Students')
// export class StudentsController {
//   constructor(private readonly StudentsService: StudentsService) {}

//   @Get()
//   async findAll(): Promise<Students[]> {
//     return this.StudentsService.findAll();
//   }

//   @Get(':id')
//   async findOne(@Param('id') id: string): Promise<Students> {
//     return this.StudentsService.findOne(+id);
//   }

//   @Post()
//   async create(@Body() studentData: Partial<Students>): Promise<Students> {
//     return this.StudentsService.create(studentData);
//   }
  
//   @Put(':id')
//   async update(@Param('id') id: string, @Body() studentData: Partial<Students>): Promise<Students> {
//     return this.StudentsService.update(+id, studentData);
//   }

//   @Delete(':id')
//   async delete(@Param('id') id: string): Promise<void> {
//     return this.StudentsService.delete(+id);
//   }
//   @Get(':id/subjects')
//   async findSubjectsByStudentID(@Param('id') id: string): Promise<Subjects[]> {
//     return this.StudentsService.findSubjectsByStudentID(+id);
//   }
// }
