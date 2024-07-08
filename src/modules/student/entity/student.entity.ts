import { Subjects } from 'src/modules/subject/entity/subject.entity';
import { Entity, Column, PrimaryColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Students {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  FirstName: string;

  @Column()
  LastName: string;

  @Column()
  Class: string;

  @Column()
  City: string;

  @Column()
  DOB: Date;

  @Column()
  Grade: string;



  @OneToMany(() => Subjects, subject => subject.student)
    subject: Subjects[];
  
}

// import { Subjects } from "src/modules/subject/entity/subject.entity";
// import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from "typeorm";


// @Entity()
// export class Students {
//     @PrimaryColumn()
//     StudentID: number;

//     @Column()
//     FirstName: string;

//     @Column()
//     LastName: string;

//     @Column()
//     Class: string;

//     @Column()
//     City: string;

//     @Column()
//     DOB: Date;

//     @Column()
//     Grade: string;

//     @ManyToMany(() => Subjects)
//     @JoinTable()
//     subjects: Subjects[];
  
    
// }
