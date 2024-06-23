import { IsInt, IsString } from "class-validator";

export class CreateLeaderDto {
    @IsString()
    name: string

    @IsString()
    qualification: string

    @IsInt()
    age: number

    @IsString()
    last_institute: string
}
