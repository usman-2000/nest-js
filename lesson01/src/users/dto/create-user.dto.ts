// DTO is a Data transfer object and checks the types that all data is sending correctly. Its a middleware.
import {
    IsString, IsEmail, IsNotEmpty, IsEnum
} from 'class-validator';


export class CreateUserDTO {
    @IsString()
    @IsNotEmpty()
    name: string

    @IsEmail()
    email: string

    @IsEnum(["Intern", "Admin", "Engineer"], { message: "valid role required" })
    role: "Intern" | "Admin" | "Engineer"
}