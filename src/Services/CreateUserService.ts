import { getRepository } from "typeorm";
import { Users } from "../entities/User";

interface Iuser{
    id: string;
    username: string;
    email?: string;
}


class CreateUserService{
    async execute({id, username, email}: Iuser){
      
        const user = await getRepository(Users)
            .createQueryBuilder()
            .insert()
            .into(Users)
            .values([
                {   
                    id: id,
                    nome: username,
                    email: email
                }
            ])
            .execute();

        return user;
    }

}

export {CreateUserService}