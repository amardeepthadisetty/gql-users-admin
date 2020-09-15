import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class InputUser{

    @Field({ nullable: true})
    readonly title:string;

    @Field({ nullable: true})
    readonly first_name: string;

    @Field({ nullable: true})
    readonly last_name: string;

    @Field()
    readonly email: string;

    @Field()
    readonly password: string;

    @Field({ nullable: true})
    readonly phone: string;

    
}