import { Module } from '@nestjs/common';
import { join } from 'path';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { GraphQLFederationModule } from '@nestjs/graphql';
import { ConfigModule } from '@nestjs/config';

const basePath = './apps/users';

@Module({
  imports: [
    ConfigModule.forRoot(),
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
      engine: false,
      // engine: {
      //   reportSchema: true,
      //   debugPrintReports: false,
      //   // https://www.apollographql.com/docs/apollo-server/api/apollo-server/#enginereportingoptions
      //   graphVariant: Config.get('app.env'),
      //   sendVariableValues: { all: true },
      //   sendHeaders: { all: true },
      //   generateClientInfo: ({ user, request }) => {
      //     return {
      //       clientReferenceId: user ? user._id.toString() : null,
      //       clientName: user ? user.username : null,
      //       clientVersion: request.http.headers.get('app-version')
      //     };
      //   }
      // }
    }),
  ],
  providers: [
    UserResolver,
    UserService,
  ],
})
export class UserModule {
}
