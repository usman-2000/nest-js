// DTO is a Data transfer object and checks the types that all data is sending correctly. Its a middleware.

export class CreateUserDTO {
    name: string
    email: string
    role: "Intern" | "Admin" | "Engineer"
}