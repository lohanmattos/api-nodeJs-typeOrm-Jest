import { Connection, createConnection, getConnectionOptions } from "typeorm";

export default async():Promise<Connection> => {
    const defaultOption = await getConnectionOptions();
    return createConnection(
        Object.assign(defaultOption, {
            //Verifica se a variavel de ambiente NODE_ENV === test
            //Se verdade cria um novo banco de dados para ser usado para test
            database: process.env.NODE_ENV === "test" ? 
            './src/database/database.test.sqlite':
            //Se falso utiliza a base de dados já existente 
            defaultOption.database 
        })
    )

}