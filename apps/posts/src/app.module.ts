import { Module } from '@nestjs/common';
import { GraphQLFederationModule } from '@nestjs/graphql';
import { PostService } from './post.service';
import { join } from 'path';
import { PostResolver } from './post.resolver';

const basePath = './apps/posts';

@Module({
  imports: [
    GraphQLFederationModule.forRoot({
      debug: true,
      tracing: false,
      introspection: true,
      playground: {
        settings: {
          'editor.theme': 'dark',
        },
      },
      path: 'graphql',
      typePaths: [`${basePath}/src/**/*.graphql`],
      definitions: {
        path: join(process.cwd(), basePath, '/src/graphql.schema.ts'),
      },
      installSubscriptionHandlers: false,
    }),
  ],
  providers: [PostService, PostResolver],
})
export class AppModule {
}
