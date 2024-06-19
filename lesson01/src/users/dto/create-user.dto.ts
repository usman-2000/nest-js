// DTO is a Data transfer object and checks the types that all data is sending correctly. Its a middleware.
import { IsString, IsInt } from 'class-validator';


export class CreateUserDTO {
    @IsString()
    name: string

    @IsString()
    email: string

    @IsString()
    role: "Intern" | "Admin" | "Engineer"
}