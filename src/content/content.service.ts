import { Injectable } from '@nestjs/common';
import { CreateContentDto } from './dto/create-content.dto';
import { Content } from './content.entity';
import { ContentRepository } from './content.repository';

@Injectable()
export class ContentService {
constructor(
    private contentRepository: ContentRepository,
) {}

    createContent(CreateContentDto: CreateContentDto): Promise<Content>{
        return this.contentRepository.createContent(CreateContentDto)
    }
}
