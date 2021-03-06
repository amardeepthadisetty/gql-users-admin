import { ArgsType, Field, InputType } from "@nestjs/graphql";
import { IsDefined, IsEmail, IsNotEmpty, MinLength, ValidateIf, ValidationArguments } from "class-validator";
import { UserProductsInputDTO } from "../dto/user-productsInput.dto";


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

    
    @Field({nullable:true})
    //@IsNotEmpty()
    @ValidateIf(o => o.password != "")
    //@MinLength(8)
    password: string;

    @Field({ nullable: true})
     phone: string;


     @Field({nullable:true})
     client_id?:string;
 
     //@IsBoolean()
     @Field({nullable:true})
     active:boolean;
 
     @Field({nullable:true})
     transactions:number;
 
     @Field({ defaultValue:'ap'})
     tier:string;
 
     @Field({nullable:true})
     provider?:string;
 
    @Field( type => [UserProductsInputDTO], { nullable:true })
    recent_viewed: UserProductsInputDTO[];
 ​
    @Field( () => [UserProductsInputDTO],{nullable:true})
    favourites?:UserProductsInputDTO[];
  ​
    @Field( () => [UserProductsInputDTO],{nullable:true})
    products_saved_for_later?:UserProductsInputDTO[];  
 
     @Field( {defaultValue:new Date() })
     inserted_at?:Date; 
 
     @Field( { defaultValue:new Date() })
     updated_at?:Date; 
 
     @Field({nullable:true})
     is_alliance?:boolean;
 ​
     @Field({nullable:true})
     alliance_id?:string;
 ​
     @Field({nullable:true})
     oauth_id?:string;
 ​
     @Field({nullable:true})
     phone_country_code?:string;
 ​
     @Field({nullable:true})
     city_id?:number;
 ​
     @Field({nullable:true})
     country_id?:number;
 ​
     @Field({nullable:true})
     news_letter_subscribed?:boolean;
 ​
     @Field({nullable:true})
     vat_number?:string; 
 
     ​
     @Field({nullable:true})
     vat_registration_date?:Date;

    
}