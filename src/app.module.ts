import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as typeOrmConfig  from './config/typeorm.config';
import { UsersModule } from './users/users.module';
import { AdminModule } from './admin/admin.module';
import * as config from 'config';


const graphQl = config.get('graphql');
@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    GraphQLModule.forRoot({
      //autoSchemaFile: 'schema.gpl',
      autoSchemaFile: true,
      sortSchema: true,
      path: '/api/users',
      playground: process.env.GRAPHQL_PLAYGROUND || graphQl.playground
    }),
    UsersModule,
    AdminModule,

  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
