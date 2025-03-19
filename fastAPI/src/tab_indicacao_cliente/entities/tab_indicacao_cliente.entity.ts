import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class TabIndicacaoCliente {
    @PrimaryGeneratedColumn()
    id: number; //padrão

    @Column()
    usuario: string; //padrão

    @CreateDateColumn()
    data_criacao: Date; //padrão

    @Column()
    cnpj_cliente_indicado: string;

    @Column()
    razao_social: string;

    @Column()
    atuacao: string;

    @Column()
    status: string;
}