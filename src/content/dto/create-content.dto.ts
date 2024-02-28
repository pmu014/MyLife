import { IsEnum, IsNotEmpty } from "class-validator";
import { ContentDivision } from "../content-division.enum";

export class CreateContentDto {
    @IsNotEmpty()
    title: string;
    
    @IsNotEmpty()
    release: string; 

    @IsEnum(ContentDivision)
    division: ContentDivision; 
}