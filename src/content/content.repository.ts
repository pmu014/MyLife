import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { Content } from "./content.entity";
import { CreateContentDto } from "./dto/create-content.dto";

@Injectable()
export class ContentRepository extends Repository<Content> {
    constructor(private dataSource: DataSource){
        super(Content, dataSource.createEntityManager());
    }

    async createContent(CreateContentDto: CreateContentDto):Promise<Content>{
        //들어갈거 쓰기
        // const {title, description} = createBoardDto;

        // const board = this.create({
        //     title,
        //     description,
        //     status: BoardStatus.PUBLIC
        // });
    
        // await this.save(board);
        // return board;
    }
}