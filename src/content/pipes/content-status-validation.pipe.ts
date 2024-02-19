// import { BadRequestException, PipeTransform } from "@nestjs/common";

// export class CreateContentValidationPipe implements PipeTransform {


//     transform(value: any){
//        value = value.toUpperCase();

//        if(!this.isStatusValid(value)) {
//             throw new BadRequestException(`${value} isn't in the status options`);
//        }

//        return value;
//     }

//     private isStatusValid(status: any){
//         const index = this.StatusOption.indexOf(status);
//         return index !== -1;
//     }
// }