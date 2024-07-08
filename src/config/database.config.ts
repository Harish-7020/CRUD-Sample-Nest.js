import { Injectable } from "@nestjs/common";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { Students } from "src/modules/student/entity/student.entity";
import { Subjects } from "src/modules/subject/entity/subject.entity";

@Injectable()
export class TypeormService implements TypeOrmOptionsFactory {
    createTypeOrmOptions(): TypeOrmModuleOptions {

return {
            type: 'mssql',
            host: 'localhost',
            username: 'SA',
            password: 'Admin@2024',
            port: 1433,
            database: 'STUDENTS',
            options: {
                trustServerCertificate: true,
              },
            entities :[Students, Subjects],
            // "synchronize": true

        };
    }
    // Students,Subjects
}