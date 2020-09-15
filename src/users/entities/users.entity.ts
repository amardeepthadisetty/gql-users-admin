import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('users')
export class UserEntity{
    @PrimaryGeneratedColumn({type: 'bigint'})
    id: number;

    @Column({ nullable: true, type:'varchar' , length:255})
    client_id: string;

    @Column({type:'bool', default:'false'})
    active:boolean;

    @Column({ nullable: true, type:'varchar' , length:255})
    title: string;

    @Column({ nullable: true, type:'varchar' , length:255})
    first_name: string;

    @Column({ nullable: true, type:'varchar' , length:255})
    last_name: string;

    @Column({ type:'varchar' , length:255})
    email: string;

    @Column({ type:'varchar' , length:255})
    password: string;

    @Column({ nullable: true,type:'varchar' , length:255})
    phone: string;

    @Column({ nullable: true,type:'int4' })
    transactions: string;

    @Column({ type:'varchar' , length:255, default: 'ap' })
    tier: string;

    //@Column({ type:'varchar' , length:255, default: 'ap' })
    @UpdateDateColumn({ type: 'timestamp without time zone', name: 'last_seen', default: () => 'LOCALTIMESTAMP' })
    last_seen: Date;

    @CreateDateColumn({ type: 'timestamp without time zone', name: 'inserted_at', default: () => 'LOCALTIMESTAMP' })
    inserted_at: Date;

    @UpdateDateColumn({ type: 'timestamp without time zone', name: 'updated_at', default: () => 'LOCALTIMESTAMP' })
    updated_at: Date;

    @Column({ type:'varchar' , length:255, default: 'password' })
    provider: string;

    @Column({ type:'jsonb' , default: '{}' })
    recent_viewed: Object;

    @Column({ type:'jsonb' , default: '{}' })
    favourites: Object;

    @Column({ type:'jsonb' , default: '{}' })
    products_saved_for_later: Object;

    @Column({type:'bool', default: 'false'})
    is_alliance:boolean;


    @Column({ nullable: true, type:'varchar' , length:255})
    alliance_id: string;

    @Column({ nullable: true, type:'varchar' , length:255})
    oauth_id: string;

    @Column({ nullable: true, type:'varchar' , length:11})
    phone_country_code: string;

    @Column({ nullable: true,type:'int4' })
    city_id: string;

    @Column({ nullable: true,type:'int4' })
    country_id: string;

    @Column({ nullable: true,type:'bool' })
    news_letter_subscribed: boolean;

    @Column({ nullable: true,type:'varchar', length: 255 })
    vat_number: boolean;

    @Column({ nullable: true,type:'timestamp without time zone' })
    vat_registration_date: string;

}