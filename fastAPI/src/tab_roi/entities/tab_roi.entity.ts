import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class TabRoi {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar' })
    cnpj: string;

    @Column({ type: 'varchar' })
    usuario: string;

    @CreateDateColumn({ type: 'timestamptz', nullable: true })
    data_criacao: Date;


    @Column({ type: 'integer' })
maquina_cartao: number;

@Column({ type: 'integer' })
emprestimos_financiamentos: number;

@Column({ type: 'integer' })
telefonia: number;

@Column({ type: 'integer' })
contabilidade: number;

@Column({ type: 'integer' })
taxas_bancarias: number;

@Column({ type: 'integer' })
taxas_administrativas: number;

@Column({ type: 'integer' })
investimentos: number;

@Column({ type: 'integer' })
juridico: number;

@Column({ type: 'integer' })
mensalidade_roi: number;

@Column({ type: 'integer' })
ferias: number;

@Column({ type: 'integer' })
aumento_equipe: number;
}