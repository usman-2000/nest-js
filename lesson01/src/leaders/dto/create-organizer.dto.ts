import { IsInt, IsNumber, IsString } from "class-validator";

export class CreateOrganizerDto {
    @IsString()
    name: string

    @IsNumber()
    stalls_registered: number
}
