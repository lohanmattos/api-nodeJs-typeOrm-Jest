import { CreateUserService } from "../src/Services/CreateUserService"
import {v4 as uuid} from 'uuid';


class FakeData{

    createUserService = new CreateUserService();

    async execute() {

        await this.createUserService.execute({
            id: uuid(),
            username: 'user 01',
            email: '01@example.com'
        })
    
        await this.createUserService.execute({
            id: uuid(),
            username: 'user 02',
            email: ''
        })
    }

    async createUser(){
        const user =  await this.createUserService.execute({
            id: uuid(),
            username: 'user 03',
            email: ''
        })

        return user
    }
}

export {FakeData}