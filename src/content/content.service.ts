import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateContentDto } from './dto/create-content.dto';
import { Content } from './content.entity';
import { ContentRepository } from './content.repository';
import { ContentDivision } from './content-division.enum';

@Injectable()
export class ContentService {
constructor(
    private contentRepository: ContentRepository,
) {}

    createContent(CreateContentDto: CreateContentDto): Promise<Content>{
        return this.contentRepository.createContent(CreateContentDto)
    }

    async getContent(division: ContentDivision): Promise<Content[]>{
        const found = await this.contentRepository.findBy({
            division
        });

        if(!found || found.length === 0) {
            throw new NotFoundException(`Can't find Board with ${division}`);
        }

        return found;
    }

    // patchContent(CreateContentDto: CreateContentDto): Promise<Content>{
    //     return this.contentRepository.patchContent(CreateContentDto)
    // }
}
