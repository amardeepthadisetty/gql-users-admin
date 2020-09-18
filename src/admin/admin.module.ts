import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminResolver } from './admin.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminEntity } from './entities/admin-entity.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AdminEntity])],
  providers: [AdminService, AdminResolver],
})
export class AdminModule {}
