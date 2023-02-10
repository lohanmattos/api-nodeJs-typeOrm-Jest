import createConnection  from "../database";
import { getConnection } from "typeorm";
import { makeResponse } from "../../utils/mocks/MockResponse";
import { UpdateUserService } from "../Services/UpdateUserService";
import { UpdateUserController } from "./UpdateUserController";
import { FakeData } from "../../utils/fakeData";
import { Request } from "express";

describe("UpdateUserController", () => {

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

    it("Deve retorna status 204 quando usuário for editado", async () => {
        const updateUserController = new UpdateUserController();

        const mockUser = await fakeData.createUser();

        const request = {
            body:{
                id: mockUser.id,
                nome: "Outro nome",
                email: "Outroemail@gmail.org"
            }
        } as Request;

        const response = makeResponse();

        await updateUserController.handler(request, response);

        expect(response.state.status).toBe(204);
    })

})