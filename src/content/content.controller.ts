import { Body, Controller, Get, Post, Render, UsePipes, ValidationPipe } from '@nestjs/common';
import { ContentService } from './content.service';

@Controller('content')
export class ContentController {
    constructor(private contentService: ContentService) {}

    @Get()
    @Render('content')
    root(){

    }
    //contentDto , entity 만들기, 
    @Post()
    @UsePipes(ValidationPipe)
    createContent(@Body() CreateContentDto: CreateContentDto): Promise<Content> {
        return this.contentService.createContent(CreateContentDto)
    }


}