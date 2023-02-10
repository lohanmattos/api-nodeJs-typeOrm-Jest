import createConnection from "../database";
import { getConnection } from "typeorm";
import { GetAllUserController } from "./GetAllUserController";
import { FakeData } from "../../utils/fakeData";
import { MockRequest } from "../../utils/mocks/MockRequest";
import { makeResponse } from "../../utils/mocks/MockResponse";

describe("GetAllUserController", () => {
    beforeAll(async () => {
        const connection = await createConnection();
        connection.runMigrations;
    })

    afterAll(async () => {
        const connection = getConnection();
        connection.query("DELETE FROM users");
        connection.close();
    })

    const fakeData = new FakeData()

    it("Deve retornar status 200  quando pegar todos os usuario", async() => {
        await fakeData.execute();

        const getAllUserController =new GetAllUserController();

        const request = MockRequest({});

        const response = makeResponse();

        await getAllUserController.handler(request,response);

        expect(response).toBe(200);

    })
})
