import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { LeadersService } from './leaders.service';
import { CreateLeaderDto } from './dto/create-leader.dto';
import { UpdateLeaderDto } from './dto/update-leader.dto';
import { ValidationPipe } from 'src/users/dto/validation.pipe';

@Controller('leaders')
export class LeadersController {
  constructor(private readonly leadersService: LeadersService) { }

  @Post()
  create(@Body(new ValidationPipe()) createLeaderDto: CreateLeaderDto) {
    return this.leadersService.create(createLeaderDto);
  }

  @Get()
  findAll() {
    return this.leadersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.leadersService.findOne(id);
  }
}
