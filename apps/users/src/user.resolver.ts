import { UserService } from './user.service';
import { Args, Query, Resolver, ResolveReference } from '@nestjs/graphql';
import { User } from './graphql.schema';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {
  }

  @Query()
  getUser(@Args('id') id: string): Promise<User> {
    return this.userService.findById(id);
  }

  @ResolveReference()
  resolveReference(reference: { __typename: string; id: string }): Promise<User> {
    return this.userService.findById(reference.id);
  }
}
