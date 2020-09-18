import { Field, Int, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsEmail, MinLength } from 'class-validator';
import { AdminPermissionInput } from './adminPermissions.input';

@InputType()
export class AdminsUpdateInput {
  @Field({ nullable: true })
  // @IsNotEmpty()
  first_name: string;

  @Field({ nullable: true })
  last_name: string;

  @Field({ nullable: true })
  // @IsNotEmpty()
  // @IsEmail()
  email: string;

  @Field({ defaultValue: true, nullable: true })
  active: boolean;

  @Field({ nullable: true })
  // @IsNotEmpty()
  // @MinLength(8)
  password: string;

  @Field({ nullable: true })
  // @IsNotEmpty()
  inserted_at: Date;

  @Field({ nullable: true })
  // @IsNotEmpty()
  updated_at: Date;

  @Field({ nullable: true })
  webhook_token: string;

  @Field({ nullable: true })
  superadmin: boolean;

  @Field(() => AdminPermissionInput, { nullable: true })
  permissions: AdminPermissionInput;

  @Field(() => [Int], { nullable: true })
  // @IsNotEmpty()
  cities_area_ids: any;
}
