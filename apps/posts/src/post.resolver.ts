import { Parent, Query, ResolveProperty, Resolver } from '@nestjs/graphql';
import { PostService } from './post.service';
import { Post } from './graphql.schema';

@Resolver('Post')
export class PostResolver {
  constructor(private readonly postService: PostService) {
  }

  @Query('getPosts')
  getPosts() {
    return this.postService.all();
  }

  @ResolveProperty('user')
  getUser(@Parent() post: Post) {
    return { __typename: 'User', id: post.user_id };
  }
}
