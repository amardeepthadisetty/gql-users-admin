import { Field, Int, InputType } from '@nestjs/graphql';

@InputType()
class OptionsInput {
  @Field({ nullable: true })
  country: string;

  @Field()
  read_only: boolean;

  @Field(() => [Int])
  store_ids: number[];
}

@InputType()
class OrdersInput {
  @Field()
  active: boolean;

  @Field(() => OptionsInput)
  options: OptionsInput;
}

@InputType()
export class AdminPermissionInput {
  @Field()
  orders: OrdersInput;
}
