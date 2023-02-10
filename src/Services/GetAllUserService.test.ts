import { getConnection } from "typeorm";
import  createConnection  from "../database";
import { GetAllUserService } from "./GetAllUserService";
import { FakeData } from "../../utils/fakeData";


describe("GetAllUserService", () => {

    beforeAll(async () => {
        const connection = await createConnection();
        await connection.runMigrations;
    });

    afterAll(async () => {
        const connection = getConnection();
        await connection.query('DELETE FROM users');
        await connection.close;
    })

    const fakeData = new FakeData();

    it("Deve retonar todos os usuarios cadastrados", async () => {
        
        await fakeData.execute();
        
        const expectResonse = [
            {
                nome: 'user 01',
                email: '01@example.com'
            },
            {
                nome: 'user 02',
                email: ''
            }
        ]

        

        const getAllUserService = new GetAllUserService();

        const result = await getAllUserService.execute();

        expect(result).toMatchObject(expectResonse)
    })



})