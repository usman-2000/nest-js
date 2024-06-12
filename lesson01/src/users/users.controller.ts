import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('users') //  /users
export class UsersController {

    // Order does matter here when defining routes, we cannot define any route that is getting all data after we defined the route that is getting a single data using 'id'
    @Get() // /users
    findAll(@Query('role') role?: "ADMIN" | "USER" | "MANAGER") {
        return []
    }

    @Get(":id") // /users/:id
    findOne(@Param('id') id: string) {
        return { id }
    }

    @Post() // Post /user
    create(@Body() user: {}) {
        return user
    }

    @Patch(":id") // PATCH  /users/:id
    update(@Param('id') id: string, @Body() userUpdate: {}) {
        return { id, ...userUpdate }
    }

    @Delete(":id") // DELETE  /users/:id
    delete(@Param('id') id: string) {
        return { id, message: "Delete Successfully" }
    }
}
