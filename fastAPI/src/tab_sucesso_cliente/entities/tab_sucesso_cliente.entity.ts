import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity({ name: 'tab_sucesso_cliente' })
export class TabSucessoCliente {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 20 })
    cnpjCliente: string;

    @Column({ type: 'int' })
    sucesso: number;

    @Column({ type: 'text' })
    feedbackPosVenda: string;

    @Column({ type: 'text' })
    feedbackNegocio: string;

    @Column({ type: 'text' })
    feedbackProduto: string;

    @Column({ type: 'int' })
    NpsFast: number;

    @Column({ type: 'int' })
    LtvConsultor: number;

    @Column({ type: 'varchar', length: 50 })
    usuario: string;

    @CreateDateColumn({ type: 'timestamptz', nullable: true })
    data: Date;

    @Column({ type: 'date' })
    dataContato: Date;

    @Column({ type: 'date' })
    dataUltimoContato: Date;

    @Column({ type: 'date' })
    dataProximoContato: Date;
}