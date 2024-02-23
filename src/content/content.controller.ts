import { Body, Controller, Get, Param, Post, Render, UsePipes, ValidationPipe } from '@nestjs/common';
import { ContentService } from './content.service';
import { CreateContentDto } from './dto/create-content.dto';
import { Content } from './content.entity';
import { CreateContentValidationPipe } from './pipes/content-status-validation.pipe';
import { ContentDivision } from './content-division.enum';

@Controller('content')
export class ContentController {
    constructor(private contentService: ContentService) {}

    @Get()
    @Render('content')
    root(){
        return {message: "hello"}
    }
    //파이프내용 수정
    @Get('/:div')
    getContent(@Param('div', CreateContentValidationPipe) div: ContentDivision ){

    }
    //contentDto+pipes , entity 날짜수정, 
    @Post()
    @UsePipes(ValidationPipe)
    createContent(@Body() CreateContentDto: CreateContentDto): Promise<Content> {
        return this.contentService.createContent(CreateContentDto)
    }


}