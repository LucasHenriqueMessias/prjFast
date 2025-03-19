import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class TabContrato {

    @PrimaryGeneratedColumn()
    id: number; //padrão

    @CreateDateColumn({ type: 'timestamptz', nullable: true })
    data_criacao: Date;

    @Column()
    usuario: string; //padrão

    @Column()
    cliente: string; //padrão

    @Column()
    cnpj: string;

    @Column()
    tipo_documento: string; //contrato, recisão...

    @Column()
    contrato_id: number; //Contrato salvo pelo tab_upload, id declarada aqui
}