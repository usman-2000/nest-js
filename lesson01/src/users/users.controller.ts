import { Body, Controller, Delete, Get, Param, Patch, Post, Query, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

// ParseIntPipe is a middleware to validate data that the given data is in numbers.

@Controller('users') //  /users
export class UsersController {

    constructor(private readonly usersService: UsersService) { }

    // Order does matter here when defining routes, we cannot define any route that is getting all data after we defined the route that is getting a single data using 'id'

    @Get() // /users
    findAll(@Query('role') role?: "Admin" | "Engineer" | "Intern") {
        return this.usersService.findAll(role)
    }

    @Get(":id") // /users/:id
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.findOne(id)
    }

    @Post() // Post /user
    create(@Body() createUserDto: CreateUserDTO) {
        return this.usersService.create(createUserDto)
    }

    @Patch(":id") // PATCH  /users/:id
    update(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: UpdateUserDto) {
        return this.usersService.update(id, updateUserDto)
    }

    @Delete(":id") // DELETE  /users/:id
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.delete(id)
    }
}
