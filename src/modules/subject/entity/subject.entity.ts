import { Students } from "src/modules/student/entity/student.entity";
import { Column, Entity,JoinColumn,ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Subjects {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    Maths: number;

    @Column()
    Chemistry: number;

    @Column()
    Physics: number;

    @Column()
    ComputerScience: number; 


    @ManyToOne(() => Students, student => student.subject)
    @JoinColumn({name: 'StudentID'})
    student: Students;
       
}

