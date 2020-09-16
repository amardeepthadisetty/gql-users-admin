import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { UserEntity } from './entities/users.entity';
import { getUserByEmailnPasswordInput } from './inputs/input-getUserByEmailAndPassword';
import { InputUser } from './inputs/input-user';
import { UpdateInputUser } from './inputs/update-user';
import { UsersService } from './users.service';

@Resolver((of) => UserEntity)
export class UsersResolver {
    constructor(private userService: UsersService){}

    @Query( () => [UserEntity])
    async getAllUsers(): Promise<UserEntity[]>{
        return this.userService.getAllUsers();
    }

    @Query( () => UserEntity)
    async getUserByEmailAndPassword(@Args('data') data : getUserByEmailnPasswordInput){
        return this.userService.getUserDataByEmail(data);
    }

    @Mutation(() => UserEntity )
    async createUser(@Args('data') data: InputUser){

        console.log("user data is: ", data);
        return this.userService.createNewUser(data);

    }

    @Mutation(() => UserEntity)
    async updateUser(
    @Args('email') email: string,
    @Args('updateData') updateFields : UpdateInputUser
    ){
        return this.userService.updateUserFieldsBasedOnEmail(email, updateFields);
    }

    @Mutation(() => Boolean)
    async deleteUser(@Args("id") id: number) {
        return this.userService.deleteUser(id);
    }
}
