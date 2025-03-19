import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class TabParceriaFast {

    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn({ type: 'timestamptz', nullable: true })
    data_criacao: Date;

    @Column()
    usuario: string;

    @Column()
    parceiro: string;

    @Column()
    justificativa: string;

    @Column()
    status: string;

    @Column()
    resultado: string;
}