import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class TabSinalAmarelo {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    usuario: string;

    @Column()
    cliente: string;

    @Column()
    status: string;
    
    @CreateDateColumn({ type: 'timestamptz', nullable: true })
    data_criacao: Date;
}