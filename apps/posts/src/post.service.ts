import { Injectable } from '@nestjs/common';
import { Post } from './graphql.schema';

const data: Post[] = [
  {
    id: 'p1',
    title: 'post 1',
    body: 'as',
    user_id: 'u1',
  },
  {
    id: 'p2',
    title: 'post 2',
    body: 'as',
    user_id: 'u1',
  },
  {
    id: 'p3',
    title: 'post 3',
    body: 'as',
    user_id: 'u2',
  },
  {
    id: 'p4',
    title: 'post 3',
    body: 'as',
    user_id: 'u3',
  },
];

@Injectable()
export class PostService {
  all(): Promise<Post[]> {
    return Promise.resolve(data);
  }
}
