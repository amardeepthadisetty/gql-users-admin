import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Field, ObjectType } from "@nestjs/graphql";
import { UserProductsDTO } from "../dto/user.products.dto";

@Entity('users')
@ObjectType()
export class UserEntity{
    @Field()
    @PrimaryGeneratedColumn({type: 'bigint'})
    id: number;

    @Field({ nullable: true})
    @Column({ nullable: true, type:'varchar' , length:255})
    client_id: string;

    @Field()
    @Column({type:'bool', default:'false'})
    active:boolean;

    @Field({ nullable: true})
    @Column({ nullable: true, type:'varchar' , length:255})
    title: string;

    @Field({ nullable: true})
    @Column({ nullable: true, type:'varchar' , length:255})
    first_name: string;

    @Field({ nullable: true})
    @Column({ nullable: true, type:'varchar' , length:255})
    last_name: string;

    @Field()
    //@Column({unique: true})
    //email: string;
    @Column({ type:'varchar' , length:255})
    email: string;

    @Column({ type:'varchar' , length:255})
    password: string;

    @Field({ nullable: true})
    @Column({ nullable: true,type:'varchar' , length:255})
    phone: string;

    @Column({ nullable: true,type:'int4' })
    transactions: string;

    @Field()
    @Column({ type:'varchar' , length:255, default: 'ap' })
    tier: string;

    //@Column({ type:'varchar' , length:255, default: 'ap' })
    @UpdateDateColumn({ type: 'timestamp without time zone', name: 'last_seen', default: () => 'LOCALTIMESTAMP' })
    last_seen: Date;

    //@Field()
    @CreateDateColumn({ type: 'timestamp without time zone', name: 'inserted_at', default: () => 'LOCALTIMESTAMP' })
    inserted_at: Date;

    @Field()
    @UpdateDateColumn({ type: 'timestamp without time zone', name: 'updated_at', default: () => 'LOCALTIMESTAMP', onUpdate : 'LOCALTIMESTAMP' })
    updated_at: Date;

    @Column({ type:'varchar' , length:255, default: 'password' })
    provider: string;

    @Field(() => [UserProductsDTO])
    //@Field()
    @Column({ type:'jsonb' ,nullable:true, default:()=> "'[]'" })
    recent_viewed: UserProductsDTO[];
   // recent_viewed: Object;

    @Field(() => [UserProductsDTO])
    @Column({ type:'jsonb' ,nullable:true, default:()=> "'[]'" })
    favourites: UserProductsDTO[];

    @Field(() => [UserProductsDTO])
    @Column({ type:'jsonb' ,nullable:true, array:true, default:()=> "'[]'" })
    products_saved_for_later: Array<UserProductsDTO> ;

    @Field({ nullable: true})
    @Column({type:'bool', default: 'false'})
    is_alliance:boolean;

    @Field({ nullable: true})
    @Column({ nullable: true, type:'varchar' , length:255})
    alliance_id: string;

    @Field({ nullable: true})
    @Column({ nullable: true, type:'varchar' , length:255})
    oauth_id: string;

    @Field({ nullable: true})
    @Column({ nullable: true, type:'varchar' , length:11})
    phone_country_code: string;

    @Field({ nullable: true})
    @Column({ nullable: true,type:'int4' })
    city_id: number;

    @Field({ nullable: true})
    @Column({ nullable: true,type:'int4' })
    country_id: number;

    @Column({ nullable: true,type:'bool' })
    news_letter_subscribed: boolean;

    @Field({ nullable: true})
    @Column({ nullable: true,type:'varchar', length: 255 })
    vat_number: boolean;

    @Column({ nullable: true,type:'timestamp without time zone' })
    vat_registration_date: string;

}

