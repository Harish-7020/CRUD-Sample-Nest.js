import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { StudentsService } from './student.service';
import { Students } from './entity/student.entity';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Get()
  async findAll(): Promise<Students[]> {
    return this.studentsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Students> {
    return this.studentsService.findOne(+id);
  }

  @Post()
  async create(@Body() studentData: Partial<Students>): Promise<Students> {
    return this.studentsService.create(studentData);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() studentData: Partial<Students>): Promise<Students> {
    return this.studentsService.update(+id, studentData);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.studentsService.delete(+id);
  }
}
