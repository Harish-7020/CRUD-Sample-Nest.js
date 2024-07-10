// import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
// import { SubjectsService } from './subject.service';
// import { Subjects } from './entity/subject.entity';

// @Controller('subject')
// export class SubjectController {
//     constructor(private readonly subjectsService: SubjectsService) {}

//   @Get()
//   async findAll(): Promise<Subjects[]> {
//     return this.subjectsService.findAll();
//   }

//   @Get(':id')
//   async findOne(@Param('id') id: string): Promise<Subjects> {
//     return this.subjectsService.findOne(+id);
//   }

//   @Post()
//   async create(@Body() studentData: Partial<Subjects>): Promise<Subjects> {
//     return this.subjectsService.create(studentData);
//   }
  
//   @Put(':id')
//   async update(@Param('id') id: string, @Body() studentData: Partial<Subjects>): Promise<Subjects> {
//     return this.subjectsService.update(+id, studentData);
//   }

//   @Delete(':id')
//   async delete(@Param('id') id: string): Promise<void> {
//     return this.subjectsService.delete(+id);
//   }

// }
// import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';

/////////////////////////////////////////////////////////////////////////////////////////////

import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { SubjectsService } from './subject.service';
import { Subjects } from './entity/subject.entity';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';

@Controller('subjects')
export class SubjectsController {
  constructor(private readonly subjectsService: SubjectsService) {}

  @Get()
  findAll() {
    return this.subjectsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.subjectsService.findOne(id);
  }

  @Get('student/:studentId')
  findByStudentId(@Param('studentId') studentId: number) {
    return this.subjectsService.findByStudentId(studentId);
  }
  
  @Post()
  create(@Body() createSubjectDto : CreateSubjectDto) {
    return this.subjectsService.create(createSubjectDto);
  }
  
  @Put(':id')
  update(@Param('id') id: number, @Body() updateSubjectDto :UpdateSubjectDto) {
    return this.subjectsService.update(id, updateSubjectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.subjectsService.remove(id);
  }
}
