import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { LeadersModule } from './leaders/leaders.module';

@Module({
  imports: [UsersModule, LeadersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
