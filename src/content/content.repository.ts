import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { Content } from "./content.entity";
import { CreateContentDto } from "./dto/create-content.dto";

@Injectable()
export class ContentRepository extends Repository<Content> {
    constructor(private dataSource: DataSource){
        super(Content, dataSource.createEntityManager());
    }

    async createContent(createContentDto: CreateContentDto):Promise<Content>{

        const {title, release, division} = createContentDto;
        //division 파이프수정필요
        const contentCreate = this.create({
            title,
            release,
            division
        });
    
        await this.save(contentCreate);
        return contentCreate;
    }
}