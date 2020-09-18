import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { InputUser } from "../inputs/input-user";

@ObjectType()
// @InputType()
export class UserProductsDTO {
    @Field({nullable:true})
    id:number;

    @Field({nullable:true})
    type: string;
}