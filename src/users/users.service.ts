import { Injectable, NotAcceptableException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection, Repository } from 'typeorm';
import { UserEntity } from './entities/users.entity';
import { InputUser } from './inputs/input-user';
import * as bcrypt  from 'bcrypt';
import { UpdateInputUser } from './inputs/update-user';
import { getUserByEmailnPasswordInput } from './inputs/input-getUserByEmailAndPassword';
@Injectable()
export class UsersService {
    constructor(@InjectRepository(UserEntity) private readonly usersRepository : Repository<UserEntity>){}

    async getAllUsers():Promise<UserEntity[]> {
        return await this.usersRepository.find();
    }

    async deleteUser(id:number){
        const user = await this.usersRepository.findOne({id:id});
        if (!user) throw new NotFoundException(`The record with ${id} does not exists`);
        await this.usersRepository.remove(user);
        return true;
    }

    async getUserDataByEmail(data: getUserByEmailnPasswordInput){

        const emailExists = await this.usersRepository.findOne({ email: data.email});
        if( !emailExists ){
            throw new NotFoundException('This Email address it not with us. Please cross check once! ');
            //return '';
        }

        const isMatch = await bcrypt.compare(data.password, emailExists.password );

        if (!isMatch) {
          throw new UnauthorizedException('The password seems to be incorrect. Please provide a valid one');
        }

        return emailExists;

    }

    async createNewUser(data: InputUser){

        const emailNew = await this.checkIfEmailExists(data.email);

        if ( !emailNew ){
            // email doesn't exists
            //now push the object into table
            const user = new UserEntity();

            /* user.title = data.title;
            user.first_name = data.first_name;
            user.last_name = data.last_name;
            user.email = data.email;
            user.tier = data.tier; */

            

            Object.assign(user, data);


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
        if( updateFields.password){
            const salt = await bcrypt.genSalt(10);
        
            updateFields.password = await bcrypt.hash( updateFields.password, salt);
        }
        

        if( !emailExists ){
            throw new NotAcceptableException('The Email Id you provided is not with us! Please cross check it!');
            //return '';
        }
        //{"{\"id\": 20, \"type\": \"product\"}"}
        //\"[{\"id\":2,\"type\":\"product 2\"}]\""
        //updateFields.products_saved_for_later = {{ "id":2, type: "product" }}
        //console.log(" products saved for later is: ",updateFields.products_saved_for_later);
        //updateFields.products_saved_for_later = JSON.stringify(updateFields.products_saved_for_later);
        let data:any = Object.assign(emailExists, updateFields);
        //email:anyExists.products_saved_for_later = JSON.stringify('{{ id: 2, type: "product 2"}}');
        //JSON.parse(emailExists.products_saved_for_later);

        //console.log(" recent_viewed: ", data.recent_viewed);
        //const obj = {...data.recent_viewed}; 
        //console.log(" object inside object is: ", {obj});
       /*  data.recent_viewed = JSON.stringify(data.recent_viewed);
        data.recent_viewed = data.recent_viewed.replace('[','{"');
        data.recent_viewed = data.recent_viewed.replace(']','"}');
        data.recent_viewed = data.recent_viewed.replace('},','}",');
        data.recent_viewed = data.recent_viewed.replace(',{',',"{'); */

        //console.log("stringify recent_viewed: ", data.recent_viewed);
        //data.recent_viewed = JSON.parse(data.recent_viewed);
        //console.log("parse recent_viewed: ", data.recent_viewed);
        //console.log(" recent_viewed after assign is: : ", data.recent_viewed);
       // data.recent_viewed = '{"{\\"id\\":26,\\"type\\":\\"product 24\\"}","{\\"id\\":26,\\"type\\":\\"product 26\\"}"}';
        return await this.usersRepository.save(emailExists);
        //const qry = `UPDATE users SET  recent_viewed = '{"{\\"id\\":24,\\"type\\":\\"product 24\\"}","{\\"id\\":25,\\"type\\":\\"product 25\\"}"}'   WHERE id IN ('11885')`;
        //const rawData = await this.usersRepository.query(qry);
        //const emailExistss = await this.usersRepository.findOne({ email: email});
        //console.log("raw data is: ", rawData);
        //return emailExists;
        //return rawData;


    }
}
