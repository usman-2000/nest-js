import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { LeadersService } from './leaders.service';
import { CreateLeaderDto } from './dto/create-leader.dto';
import { UpdateLeaderDto } from './dto/update-leader.dto';
import { ValidationPipe } from 'src/users/dto/validation.pipe';
import { CreateOrganizerDto } from './dto/create-organizer.dto';
import { CreateStallsDto } from './dto/create-stalls.dto';

@Controller('leaders')
export class LeadersController {
  constructor(private readonly leadersService: LeadersService) { }

  @Post()
  create(@Body(new ValidationPipe()) createLeaderDto: CreateLeaderDto) {
    return this.leadersService.create(createLeaderDto);
  }

  @Post()
  createStalls(@Body(new ValidationPipe()) createStallsDto: CreateStallsDto) {
    return this.leadersService.createStalls(createStallsDto)
  }

  @Post()
  createOrganizer(@Body(new ValidationPipe()) organizerDto: CreateOrganizerDto) {
    return this.leadersService.createOrganizer(organizerDto)
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
