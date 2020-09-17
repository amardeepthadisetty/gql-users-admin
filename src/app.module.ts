import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
//import { AppController } from './app.controller';
//import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    GraphQLModule.forRoot({
      //autoSchemaFile: 'schema.gpl',
      autoSchemaFile: true,
      path: '/api/users'
    }),
    UsersModule,

  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
