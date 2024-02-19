import { IsNotEmpty } from "class-validator";
import { ContentDivision } from "../content-division.enum";

export class CreateContentDto {
    @IsNotEmpty()
    title: string;
    
    @IsNotEmpty()
    release: string; 

    @IsNotEmpty()
    division: ContentDivision; 
}