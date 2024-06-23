import { Injectable } from '@nestjs/common';
import { CreateLeaderDto } from './dto/create-leader.dto';
import { UpdateLeaderDto } from './dto/update-leader.dto';

@Injectable()
export class LeadersService {

  private leaders = []
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
