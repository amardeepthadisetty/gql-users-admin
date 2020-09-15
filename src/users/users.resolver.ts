import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { CreateUsersDTO } from './dto/create-users.dto';
import { InputUser } from './inputs/input-user';
import { UsersService } from './users.service';

@Resolver((of) => CreateUsersDTO)
export class UsersResolver {
    constructor(private userService: UsersService){}

    @Query( () => [CreateUsersDTO])
    async users(){
        return '';
    }

    @Mutation(() => CreateUsersDTO )
    async createUser(@Args('data') data: InputUser){

        console.log("user data is: ", data);
        return this.userService.createNewUser(data);

    }
}
