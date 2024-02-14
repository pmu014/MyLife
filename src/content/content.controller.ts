import { Controller } from '@nestjs/common';
import { ContentService } from './content.service';

@Controller('content')
export class ContentController {
    constructor(private contentService: ContentService) {}

    @Get('/movie')
    @Get('/drama')
    @Get('/animation')
    @Get('/others')

}