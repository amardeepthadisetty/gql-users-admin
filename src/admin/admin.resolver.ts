import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AdminService } from './admin.service';
import { AdminEntity } from './entities/admin-entity';
import { AdminsCreateInput } from './inputs/admin.input';
import { AdminsUpdateInput } from './inputs/admin.Update.input';

@Resolver(() => AdminEntity)
export class AdminResolver {
  constructor(private readonly adminService: AdminService) {}

  @Query(() => [AdminEntity])
  public async admins(): Promise<AdminEntity[]> {
    return await this.adminService.getAdmins();
  }

  @Mutation(() => AdminEntity)
  public async addAdmin(
    @Args('admin') admin: AdminsCreateInput,
  ): Promise<AdminEntity> {
    return this.adminService.createAdmin(admin);
  }

  @Mutation(() => AdminEntity)
  public async updateAdmin(
    @Args('email') email: string,
    @Args('admin') admin: AdminsUpdateInput,
  ): Promise<AdminEntity> {
    return this.adminService.updateAdmin(email, admin);
  }
}
