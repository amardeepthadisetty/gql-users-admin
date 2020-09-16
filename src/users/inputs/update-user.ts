import { ArgsType, Field, InputType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, MinLength } from "class-validator";


@InputType()
//@ArgsType()
export class UpdateInputUser{

    @Field({ nullable: true})
     title:string;

    @Field({ nullable: true})
     first_name: string;

    @Field({ nullable: true})
     last_name: string;

    /* @Field()
    @IsNotEmpty()
    @IsEmail()
    readonly email: string; */

    @Field()
    //@IsNotEmpty()
    @MinLength(8)
     password: string;

    @Field({ nullable: true})
     phone: string;

    
}