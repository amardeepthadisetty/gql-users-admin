import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class CreateUsersDTO {
    @Field()
    id: number;

    @Field()
    client_id: string;

    @Field()
    boolean:boolean;

    @Field()
    title:string;

    @Field()
    first_name: string;

    @Field()
    last_name: string;

    @Field()
    email: string;

    @Field()
    phone:string;

    @Field()
    tier:string;

    @Field()
    updated_at:string;

    @Field()
    recent_viewed: string;

    @Field()
    favourites: string;

    @Field()
    products_saved_for_later: string;

    @Field()
    city_id: string;

    @Field()
    country_id: string;

    @Field()
    vat_number:boolean;

}