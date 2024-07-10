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
