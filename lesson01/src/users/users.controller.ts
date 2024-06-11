import { Controller, Get } from '@nestjs/common';

@Controller('users') //  /users
export class UsersController {
    @Get() // /users
    findAll() {
        return []
    }

    @Get(":id") // /users/:id
    findOne(id) {

    }
}
