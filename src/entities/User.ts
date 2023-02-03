import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity('users')
class Users{
    @PrimaryColumn()
    id: string;

    @Column()
    nome: string;

    @Column()
    email: string;
}

export {Users}