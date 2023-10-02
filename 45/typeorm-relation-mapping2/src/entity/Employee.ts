import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Department } from "./Department";

@Entity()
export class Employee {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 50
    })
    name: string;

    @ManyToOne(() => Department, {
        // cascade: true
        onDelete: 'CASCADE'
    })
    department: Department;
}

