import { Column, Entity, PrimaryColumn } from "typeorm";


@Entity()
export class Students {
    @PrimaryColumn()
    StudentID: number;

    @Column()
    FirstName: string;

    @Column()
    LastName: string;

    @Column()
    class: string;

    @Column()
    City: string;

    @Column()
    DOB: Date;

    @Column()
    Grade: string;

    
    
}