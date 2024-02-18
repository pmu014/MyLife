import { BaseEntity, Column, PrimaryGeneratedColumn } from "typeorm"
import { ContentDivision } from "./content-division.enum";

export class Content extends BaseEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    title: string;
    
    @Column()
    release: string;

    @Column()
    division: ContentDivision;

}