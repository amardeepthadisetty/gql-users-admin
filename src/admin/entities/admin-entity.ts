import { Field, Int, ObjectType } from '@nestjs/graphql';
//import { AdminPermission } from '../types/adminPermissions.dto';
import { Any, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { AdminPermission } from '../dto/adminPermissions.dto';
​
@ObjectType()
@Entity()
export class AdminEntity {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: bigint;
​
  @Column({ length: 255 })
  @Field()
  first_name: string;
​
  @Column({ length: 255 })
  @Field()
  last_name: string;
​
  @Column({ length: 255 })
  @Field()
  email: string;
​
  @Column({ default: true })
  @Field()
  active: boolean;
​
  @Column({ length: 255 })
  @Field()
  password: string;
​
  @CreateDateColumn({ type: 'timestamp without time zone' })
  @Field()
  inserted_at: Date;
​
  @UpdateDateColumn({ type: 'timestamp without time zone' })
  @Field()
  updated_at: Date;
​
  @Column({ length: 255, nullable: true })
  @Field()
  webhook_token: string;
​
  @Column({ nullable: true })
  @Field()
  superadmin: boolean;
​
  @Column({ type: 'jsonb', nullable: true })
  @Field(() => AdminPermission)
  permissions: AdminPermission;
​
  @Column({ type: 'int4range' })
  @Field(() => [Int])
  cities_area_ids: any;
}