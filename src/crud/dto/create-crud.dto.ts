import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateCrudDto {
    @IsNotEmpty()
    @IsString()
    name : string

    @IsNumber()
    @IsNotEmpty()
    age: number

}

