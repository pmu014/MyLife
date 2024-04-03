import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm"
import { ContentDivision } from "./content-division.enum";

@Entity()
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