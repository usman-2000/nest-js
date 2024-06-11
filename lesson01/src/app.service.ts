import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Salam Usman Rahim!';
  }

  getName(): string {
    return 'Usman Rahim Naam hai!';
  }
}
