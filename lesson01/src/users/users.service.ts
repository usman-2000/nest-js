import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
    private user = [
        {
            id: 1,
            name: "Usman Rahim",
            email: "usmanrahim@gmail.com",
            role: "Admin"
        },
        {
            id: 2,
            name: "Muhammad Usman",
            email: "usmanmuhammad@gmail.com",
            role: "Intern"
        },
        {
            id: 3,
            name: "Shehzad",
            email: "shehzad@gmail.com",
            role: "Engineer"
        },
        {
            id: 4,
            name: "Waqar",
            email: "waqar@gmail.com",
            role: "Admin"
        },
        ,
        {
            id: 5,
            name: "Umair",
            email: "umair@gmail.com",
            role: "Engineer"
        }
    ]

    findAll(role?: "Admin" | "Engineer" | "Intern") {
        if (role) {
            this.user.filter((us) => us.role === role)

        }
        return this.user
    }

    findOne(id: number) {
        const user = this.user.filter(us => us.id === id)
        if (!user) throw new NotFoundException("User Not Found")
        return user
    }

    create(createUserDto: CreateUserDTO) {
        const highestId = [...this.user].sort((a, b) => b.id - a.id)
        const newUser = {
            id: highestId[0].id + 1, ...createUserDto
        }
        this.user.push(newUser)
        return newUser
    }

    update(id: number, updateUserDto: UpdateUserDto) {
        this.user = this.user.map((us) => us.id === id ? { ...us, ...updateUserDto } : us)
        // this.user = this.user.map((usr) => {
        //     if (usr.id === id) {
        //         return { ...usr, ...user }
        //     }
        //     return usr
        // })

        return this.findOne(id)

    }

    delete(id: number) {
        this.user.filter((us) => us.id !== id)
        return this.findOne(id)
    }

}
