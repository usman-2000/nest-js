import { Injectable } from '@nestjs/common';
import { CreateLeaderDto } from './dto/create-leader.dto';
import { UpdateLeaderDto } from './dto/update-leader.dto';
import { CreateOrganizerDto } from './dto/create-organizer.dto';
import { CreateStallsDto } from './dto/create-stalls.dto';

@Injectable()
export class LeadersService {

  private leaders = []
  private events = {
    organizers: [],
    visitors: [],
    stalls: []
  }
  createOrganizer(organizerDto: CreateOrganizerDto) {
    const organizer_id = this.events.organizers.length + 1

    const organizerData = {
      id: organizer_id,
      ...organizerDto
    }

    this.events.organizers.push(organizerData)
    return organizerData
  }

  createStalls(createStallsDto: CreateStallsDto) {
    if (!createStallsDto.organizer_id) {
      return `There is no organizer exist with this ${createStallsDto.organizer_id} id`
    }

    const id = this.events.stalls.length + 1
    const newStall = {
      id: id,
      ...createStallsDto
    }
    this.events.stalls.push(newStall)

    return newStall
  }
  create(createLeaderDto: CreateLeaderDto) {
    const leader_id = this.leaders.length + 1
    const newLeader = {
      id: leader_id,
      ...createLeaderDto
    }

    this.leaders.push(newLeader)
    return newLeader
  }

  findAll() {
    return this.leaders;
  }

  findOne(id: number) {
    const leader = this.leaders.find((l) => l.id === id)
    return leader
  }
}
