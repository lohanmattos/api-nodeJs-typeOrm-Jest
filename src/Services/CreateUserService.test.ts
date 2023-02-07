import { getConnection } from "typeorm";
import createConnection from "../database";
import { CreateUserService } from "./CreateUserService";
import { v4 as uuid } from 'uuid';

describe("CreateUserService", () => {

    beforeAll(async () => {
        const connection = await createConnection();
        await connection.runMigrations();
    })

    afterAll(async () => {
        const connection = getConnection();
        await connection.query("DELETE FROM users");
        await connection.close();
    })

    it("Deve Retornar o id do usuário criado", async () => {

        const createUserService = new CreateUserService();
        
        const result =  await createUserService.execute({
            id: uuid(),
            username: "Algum usuário",
            email: "email@gmail.com",
        });

        expect(result).toHaveProperty('id');
    })
})