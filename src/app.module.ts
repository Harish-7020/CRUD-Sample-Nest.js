import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './modules/student/student.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeormService } from './config/database.config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: TypeormService,
    }),
StudentModule    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
