import { Field, InputType, ObjectType } from "@nestjs/graphql";

// @ObjectType()
@InputType()
export class UserProductsInputDTO {
    @Field({nullable:true})
    id:number;

    @Field({nullable:true})
    type: string;
}