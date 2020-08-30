import { Injectable } from '@nestjs/common';
import { User } from './graphql.schema';

const data: User[] = [
  {
    id: 'u1',
    name: 'Luke',
  },
  {
    id: 'u2',
    name: 'Leia',
  },
  {
    id: 'u3',
    name: 'Darth Vader',
  },
];

@Injectable()
export class UserService {
  findById(id: string): Promise<User> {
    return Promise.resolve(data.find(user => user.id === id));
  }
}
