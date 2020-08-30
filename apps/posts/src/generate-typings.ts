import { GraphQLDefinitionsFactory } from '@nestjs/graphql';
import { join } from 'path';

const definitionsFactory = new GraphQLDefinitionsFactory();
const basePath = './apps/posts';

definitionsFactory.generate({
  typePaths: [`${basePath}/src/**/*.graphql`],
  path: join(process.cwd(), basePath, '/src/graphql.schema.ts'),
  outputAs: 'interface', // interface | class
  watch: true,
  federation: true,
  emitTypenameField: false,
  skipResolverArgs: false,
});
