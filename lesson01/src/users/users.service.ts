import { Injectable } from '@nestjs/common';

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
        return user
    }

    create(user: { name: string, email: string, role: "Admin" | "Engineer" | "Intern" }) {
        const highestId = [...this.user].sort((a, b) => b.id - a.id)
        const newUser = {
            id: highestId[0].id + 1, ...user
        }
        this.user.push(newUser)
        return newUser
    }

    update(id: number, user: { name?: string, email?: string, role?: "Admin" | "Engineer" | "Intern" }) {

    }

}
