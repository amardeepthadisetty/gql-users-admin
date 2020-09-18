import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Field, ObjectType } from "@nestjs/graphql";

@Entity('admins')
@ObjectType()
export class AdminEntity{
    @Field()
    @PrimaryGeneratedColumn({type: 'bigint'})
    id: number;

    @Field()
    @Column({  type:'varchar' , length:255})
    first_name: string;

    @Field()
    @Column({  type:'varchar' , length:255})
    last_name: string;

    @Field()
    @Column({ type:'varchar' , length:255})
    email: string;

    @Column({ type:'varchar' , length:255})
    password: string;

    @Field()
    @Column({type:'bool',nullable: true, default: true})
    active:boolean;

    @Field()
    @CreateDateColumn({ type: 'timestamp without time zone', name: 'inserted_at', default: () => 'LOCALTIMESTAMP' })
    inserted_at: Date;

    @Field()
    @UpdateDateColumn({ type: 'timestamp without time zone', name: 'updated_at', default: () => 'LOCALTIMESTAMP', onUpdate : 'LOCALTIMESTAMP' })
    updated_at: Date;

    @Field({ nullable: true})
    @Column({ type:'varchar' , nullable: true, length:255})
    webhook_token: string;

    @Field({ nullable: true})
    @Column({type:'bool', nullable: true, default: true})
    superadmin:boolean;

    @Field({ nullable: true})
    @Column({type:'jsonb', nullable: true, default: '{"orders": {"active": true, "options": {"country": "SA", "read_only": false, "store_ids": []}}}'})
    permissions:string;

    @Field({ nullable: true})
    @Column({ nullable: true,type:'integer', array:true, default:() => "'{}'" })
    cities_area_ids: number;



}