import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
class Options {
  @Field({ nullable: true })
  country: string;

  @Field()
  read_only: boolean;
  @Field(() => [Int])
  store_ids: number[];
}

@ObjectType()
class Orders {
  @Field()
  active: boolean;
  @Field(() => Options)
  options: Options;
}

@ObjectType()
export class AdminPermission {
  @Field()
  orders: Orders;
}
