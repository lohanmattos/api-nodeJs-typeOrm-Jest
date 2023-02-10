import { getRepository } from "typeorm";
import { Users } from "../entities/User";


class GetAllUserService {
    async execute(){
        const users = await getRepository(Users)
        .createQueryBuilder('users')
        .select()
        .getMany()

        console.log(users)
        return users
    }
}

export {GetAllUserService}