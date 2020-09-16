import { Injectable, NotAcceptableException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/users.entity';
import { InputUser } from './inputs/input-user';
import * as bcrypt  from 'bcrypt';
import { UpdateInputUser } from './inputs/update-user';
@Injectable()
export class UsersService {
    constructor(@InjectRepository(UserEntity) private readonly usersRepository : Repository<UserEntity>){}

    async createNewUser(data: InputUser){

        const emailNew = await this.checkIfEmailExists(data.email);

        if ( !emailNew ){
            // email doesn't exists
            //now push the object into table
            const user = new UserEntity();

            user.title = data.title;
            user.first_name = data.first_name;
            user.last_name = data.last_name;
            user.email = data.email;


            const salt = await bcrypt.genSalt(10);

            user.password = await bcrypt.hash( data.password, salt);

            user.phone = data.phone;

            return await this.usersRepository.save(user);
        }

    }

    async checkIfEmailExists(email:string){
            const emailExists = await this.usersRepository.findOne({ email: email});
            if( emailExists ){
                throw new NotAcceptableException('Email Id Already exists. Please use a different one!');
                //return '';
            }

            return emailExists;
    }

    async updateUserFieldsBasedOnEmail(email: string, updateFields : UpdateInputUser){
        const emailExists = await this.usersRepository.findOne({ email: email});

        const salt = await bcrypt.genSalt(10);

        updateFields.password = await bcrypt.hash( updateFields.password, salt);

        if( !emailExists ){
            throw new NotAcceptableException('The Email Id you provided is not with us! Please cross check it!');
            //return '';
        }

        Object.assign(emailExists, updateFields);

        await this.usersRepository.save(emailExists);

        return emailExists;


    }
}
