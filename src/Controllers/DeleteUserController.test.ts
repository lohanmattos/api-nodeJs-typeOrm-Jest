import createConnection from '../database'
import { getConnection } from 'typeorm';
import { FakeData } from '../../utils/fakeData';
import { makeResponse } from '../../utils/mocks/MockResponse';
import { MockRequest } from '../../utils/mocks/MockRequest';
import {DeleteUserController}from '../Controllers/DeleteUserController'

describe('DeleteUserController', () => {

    beforeAll(async () => {
        const connection = await createConnection();
        connection.runMigrations;
    })

    afterAll(async () => {
        const connection = getConnection();
        //connection.query("DELETE FROM users");
        connection.close();
    })

    const fakeData = new FakeData();

    it("Deve retorna status 204 quando o usuário for deletado", async () =>{
        const mokeUser = await fakeData.createUser();

        const deleteUserController = new DeleteUserController();

        const request = MockRequest({
            params: {
                id: mokeUser.id
            }
        })

        const response = makeResponse();

        await deleteUserController.handler(request, response);

        expect(response.state.status).toBe(204);

    })

})