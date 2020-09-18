import { Field, Int, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsEmail, MinLength } from 'class-validator';
import { AdminPermissionInput } from './adminPermissions.input';

@InputType()
export class AdminsCreateInput {
  @Field()
  @IsNotEmpty()
  first_name: string;

  @Field()
  @IsNotEmpty()
  last_name: string;

  @Field()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Field({ defaultValue: true })
  active: boolean;

  @Field()
  @IsNotEmpty()
  @MinLength(8)
  password: string;

  @Field({ nullable: true})
  //@IsNotEmpty()
  inserted_at: Date;

  @Field({ nullable:true})
  //@IsNotEmpty()
  updated_at: Date;

  @Field({ nullable: true })
  webhook_token: string;

  @Field({ nullable: true })
  superadmin: boolean;

  @Field(() => AdminPermissionInput, { nullable: true })
  permissions: AdminPermissionInput;

  @Field(() => [Int])
  @IsNotEmpty()
  cities_area_ids: any;
}
