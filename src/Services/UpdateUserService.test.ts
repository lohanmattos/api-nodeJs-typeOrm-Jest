import { UpdateUserService } from "./UpdateUserService";
import { FakeData } from "../../utils/fakeData";
import {getConnection} from 'typeorm';
import createConnection from '../database';



describe('UpdateUserService', () => {

    beforeAll(async () => {
        const connection = await createConnection();
        await connection.runMigrations();
    })

    afterAll(async () => {
        const connection = getConnection();
        await connection.query("DELETE FROM users");
        await connection.close();

    })


    const fakeData = new FakeData();

    it("Deve editar o nome de usuário", async () => {
        const mockUser = await fakeData.createUser();

        const updateUserService = new UpdateUserService();

        const result = await updateUserService.execute({
            id: mockUser.id,
            nome: "Outro user 03"
        });

        expect(result).toHaveLength(0)

    })
})