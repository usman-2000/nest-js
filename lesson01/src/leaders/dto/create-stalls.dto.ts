import { IsInt, IsNumber, IsString } from "class-validator";

export class CreateStallsDto {
    @IsString()
    name: string

    @IsString()
    category: string

    @IsNumber()
    organizer_id: number

    @IsString()
    owner_name: string
}
