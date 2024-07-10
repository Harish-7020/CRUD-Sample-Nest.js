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
