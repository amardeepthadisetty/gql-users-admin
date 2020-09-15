import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('users')
export class UserEntity{
    @PrimaryGeneratedColumn({type: 'bigint'})
    id: number;

    @Column({ nullable: true, type:'varchar' , length:255})
    client_id: String;

    @Column({type:'bool', default:'false'})
    active:boolean;

    @Column({ nullable: true, type:'varchar' , length:255})
    title: String;

    @Column({ nullable: true, type:'varchar' , length:255})
    first_name: String;

    @Column({ nullable: true, type:'varchar' , length:255})
    last_name: String;

    @Column({ type:'varchar' , length:255})
    email: String;

    @Column({ type:'varchar' , length:255})
    password: String;

    @Column({ nullable: true,type:'varchar' , length:255})
    phone: String;

    @Column({ nullable: true,type:'int4' })
    transactions: String;

    @Column({ type:'varchar' , length:255, default: 'ap' })
    tier: String;

    //@Column({ type:'varchar' , length:255, default: 'ap' })
    @UpdateDateColumn({ type: 'timestamp without time zone', name: 'last_seen', default: () => 'LOCALTIMESTAMP' })
    last_seen: String;

    @CreateDateColumn({ type: 'timestamp without time zone', name: 'inserted_at', default: () => 'LOCALTIMESTAMP' })
    inserted_at: String;

    @UpdateDateColumn({ type: 'timestamp without time zone', name: 'updated_at', default: () => 'LOCALTIMESTAMP' })
    updated_at: String;

    @Column({ type:'varchar' , length:255, default: 'password' })
    provider: String;

    @Column({ type:'jsonb' , default: '{}' })
    recent_viewed: String;

    @Column({ type:'jsonb' , default: '{}' })
    favourites: String;

    @Column({ type:'jsonb' , default: '{}' })
    products_saved_for_later: String;

    @Column({type:'bool', default: 'false'})
    is_alliance:boolean;


    @Column({ nullable: true, type:'varchar' , length:255})
    alliance_id: String;

    @Column({ nullable: true, type:'varchar' , length:255})
    oauth_id: string;

    @Column({ nullable: true, type:'varchar' , length:11})
    phone_country_code: string;

    @Column({ nullable: true,type:'int4' })
    city_id: String;

    @Column({ nullable: true,type:'int4' })
    country_id: String;

    @Column({ nullable: true,type:'bool' })
    news_letter_subscribed: boolean;

    @Column({ nullable: true,type:'varchar', length: 255 })
    vat_number: boolean;

    @Column({ nullable: true,type:'timestamp without time zone' })
    vat_registration_date: String;

}