import { ArgsType, Field, InputType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, MinLength } from "class-validator";


@InputType()
//@ArgsType()
export class getUserByEmailnPasswordInput{

    @Field()
    @IsNotEmpty()
    @IsEmail()
    readonly email: string;

    @Field()
    @IsNotEmpty()
    @MinLength(8)
    password: string;

    
}