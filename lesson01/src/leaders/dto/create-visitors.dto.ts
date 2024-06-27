import { IsInt, IsNumber, IsString } from "class-validator";

export class CreateOrganizerDto {
    @IsString()
    name: string

    @IsString()
    email: string

    @IsString()
    designation: string

    @IsNumber()
    stall_id: number
}
