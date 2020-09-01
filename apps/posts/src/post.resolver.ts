import { Context, Parent, Query, ResolveProperty, Resolver } from '@nestjs/graphql';
import { PostService } from './post.service';
import { Post } from './graphql.schema';
import { Logger } from '@nestjs/common';

@Resolver('Post')
export class PostResolver {
  private logger = new Logger(PostResolver.name);

  constructor(private readonly postService: PostService) {
  }

  @Query('getPosts')
  getPosts(@Context() ctx: any): Promise<Post[]> {
    this.logger.log(Object.keys(ctx));
    return this.postService.all();
  }

  @ResolveProperty('user')
  getUser(@Parent() post: Post): { __typename: 'User'; id: string } {
    return { __typename: 'User', id: post.user_id };
  }
}
