import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { UserEntity } from './entities/users.entity';
import { InputUser } from './inputs/input-user';
import { UsersService } from './users.service';

@Resolver((of) => UserEntity)
export class UsersResolver {
    constructor(private userService: UsersService){}

    @Query( () => [UserEntity])
    async users(){
        return '';
    }

    @Mutation(() => UserEntity )
    async createUser(@Args('data') data: InputUser){

        console.log("user data is: ", data);
        return this.userService.createNewUser(data);

    }
}
