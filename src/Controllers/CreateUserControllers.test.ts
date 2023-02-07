import { CreateUserController } from "./CreateUserController"
import createConnection from "../database";
import { getConnection } from "typeorm";
import { Request } from "express";
import { makeResponse } from "../../utils/mocks/MockResponse";

describe("CreateUserController", () => {

    //Executa antes de todos os testes 
    beforeAll(async () => {
        //criar a conexão com o banco de dados
        const connection = await createConnection();
        //rodar a migration para criar a tabela de user
        await connection.runMigrations();
    })

    //Executa depois de todos os testes
    afterAll(async () => {
        //Pega a conexão que estar aberta
        const connection = await getConnection();
        
        //Deleta a tabela de users depois de criar o usuario
        await connection.query('DELETE FROM users');

        //Fecha a conexão
        await connection.close();
     })

    //instacia o CreateUserController
    const createUserController = new CreateUserController();

    //instancia a moke response
    const response = makeResponse();

    it("Dever retonar status 201 quando user for criado", async () => {

        //Cria o objeto request com a criação do body passando os parametros
        const request = {
            body:{
                username: "Algum usuário",
                email: 'email@algum.com'
            }
        } as Request; // Especifica que a request é do tipo Request do express
    
        
        //Chama a função handler do createUserController 
        //passando a request , response mockada
        await createUserController.handler(request, response);

        //Verfica se está passando o teste 
        expect(response.state.status).toBe(201);

    })

    it('Deve retornar status 400 quando o nome não for informado', async() =>{
        //Cria o objeto request com a criação do body passando os parametros
        const request = {
            body:{
                username: '',
                email: 'email@algum.com'
            }
        } as Request; // Especifica que a request é do tipo Request do express
    
    
        //Chama a função handler do createUserController 
        //passando a request , response mockada
        await createUserController.handler(request, response);

        //Verfica se está passando o teste 
        expect(response.state.status).toBe(400);
    
    
    })  

})