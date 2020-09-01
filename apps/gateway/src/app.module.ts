import { Module } from '@nestjs/common';
import { GATEWAY_BUILD_SERVICE, GraphQLGatewayModule } from '@nestjs/graphql';
import { BuildServiceModule } from './build-service.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLGatewayModule.forRootAsync({
      useFactory: async () => ({
        gateway: {
          serviceHealthCheck: true,
          serviceList: [
            { name: 'users', url: 'http://localhost:3101/graphql' },
            { name: 'posts', url: 'http://localhost:3102/graphql' },
          ],
        },
        server: {
          cors: true,
          context: ({ req }) => ({
            jwt: req.headers.authorization,
            foo: 'bar-1',
          }),
          // engine: {
          //   graphVariant: "current"
          // }
        },

      }),
      imports: [BuildServiceModule],
      inject: [GATEWAY_BUILD_SERVICE],
    }),
  ],
})
export class AppModule {
}
