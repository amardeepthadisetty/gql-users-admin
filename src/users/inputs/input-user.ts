import { ArgsType, Field, InputType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, MinLength } from "class-validator";


@InputType()
@ArgsType()
export class InputUser{

    @Field({ nullable: true})
    readonly title:string;

    @Field({ nullable: true})
    readonly first_name: string;

    @Field({ nullable: true})
    readonly last_name: string;

    @Field()
    @IsNotEmpty()
    @IsEmail()
    readonly email: string;

    @Field()
    @IsNotEmpty()
    @MinLength(8)
    readonly password: string;

    @Field({ nullable: true})
    readonly phone: string;

    
}