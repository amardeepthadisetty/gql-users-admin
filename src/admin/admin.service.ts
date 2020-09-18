import { Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AdminEntity } from './entities/admin-entity.entity';
import { AdminsCreateInput } from './inputs/admin.input';
import { AdminsUpdateInput } from './inputs/admin.Update.input';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(AdminEntity) private readonly adminRepo: Repository<AdminEntity>,
  ) {}

  public async getAdmins(): Promise<AdminEntity[]> {
    return await this.adminRepo.find({
      order: { first_name: 'ASC' },
    });
  }

  public async createAdmin(admin: AdminsCreateInput): Promise<AdminEntity> {
    const emailNew = await this.checkIfEmailExists(admin.email);
    if ( !emailNew ){
      const newAdmin = new AdminEntity();
      Object.assign(newAdmin, admin);

      return await this.adminRepo.save(newAdmin);
    }
    
  }

  async checkIfEmailExists(email:string){
    const emailExists = await this.adminRepo.findOne({ email: email});
    if( emailExists ){
        throw new NotAcceptableException('Email Id Already exists. Please use a different one!');
        //return '';
    }

    return emailExists;
}

  public async updateAdmin(
    email: string,
    admin: AdminsUpdateInput,
  ): Promise<AdminEntity> {
    const ad = await this.findAdmin({ email });

    Object.assign(ad, admin);

    return this.adminRepo.save(ad);
  }

  public async findAdmin(filter): Promise<AdminEntity> {
    const admin = await this.adminRepo.findOne(filter);

    if (!admin)
      throw new NotFoundException(
        `Admin doesn\'t exist with the given criteria ${filter.email}`,
      );

    return admin;
  }
}
