import { Injectable, Query } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class EmployeesService {

  constructor(private readonly databaseService: DatabaseService) { }


  // Prisma. mn hmry pass sb aajata jo hmne migrate kiya hota usky hisab sy khud hi data bana deta hai
  async create(createEmployeeDto: Prisma.EmployeeCreateInput) {
    return this.databaseService.employee.create({
      data: createEmployeeDto
    })
  }

  async findAll(role?: "INTERN" | "ADMIN" | "ENGINEER") {
    if (role) return this.databaseService.employee.findMany({
      where: {
        role
      }
    })
    return this.databaseService.employee.findMany()
  }

  async findOne(id: number) {
    return this.databaseService.employee.findUnique({
      where: {
        id
      }
    })
  }

  async update(id: number, updateEmployeeDto: Prisma.EmployeeUpdateInput) {
    return this.databaseService.employee.update({
      where: {
        id
      },
      data: updateEmployeeDto
    })
  }

  async remove(id: number) {
    return this.databaseService.employee.delete({
      where: {
        id
      }
    })
  }
}
