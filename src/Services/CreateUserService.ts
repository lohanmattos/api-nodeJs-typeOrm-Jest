import { getRepository } from "typeorm";
import { Users } from "../entities/User";

interface Iuser{
    id: string;
    username: string;
    email?: string;
}


class CreateUserService{
    async execute(user: Iuser){
      
        const userCreated = await getRepository(Users)
            .createQueryBuilder()
            .insert()
            .into(Users)
            .values([
                {   
                    id: user.id,
                    nome: user.username,
                    email: user.email
                }
            ])
            .execute();
        console.log(userCreated.identifiers[0])
        return userCreated.identifiers[0];
    }

}

export {CreateUserService}