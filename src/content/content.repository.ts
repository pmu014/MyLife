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
        const contentCreate = this.create({
            title,
            release,
            division
        });
    //아래처럼하면 리턴값어떻게 되는지 체크
        await this.save(contentCreate);
        return contentCreate;
    }

    // async patchContent(createContentDto: CreateContentDto):Promise<Content>{

    //     const {title, release, division} = createContentDto;
    //     const contentPatch = this.update({
    //         title,
    //         release,
    //         division
    //     });
    //     await this.save(contentPatch);
    //     return contentPatch;
    // }
}