import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Stock {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column("decimal")
    value: number;
}
