import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class TabFotografiaCliente {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ type: 'varchar' })
    usuario: string;

    @Column({ type: 'varchar' })
    cnpj: string;

    @CreateDateColumn({ type: 'timestamptz', nullable: true })
    data_criacao: Date;

    @Column({ type: 'varchar' })
    ferramentas: string;
    
    @Column({ type: 'varchar' })
    antecipacao_recebiveis: string;

    @Column({ type: 'varchar' })
    pagamento_impostos_mes: string;

    @Column({ type: 'varchar' })
    faturamento: string;

    @Column ({ type: 'varchar' })
    novas_fontes_receita: string;

    @Column({ type: 'varchar' })
    numero_funcionarios: string;

    @Column({ type: 'varchar' })
    numero_clientes: string;

    @Column({ type: 'varchar' })
    margem_lucro: string;

    @Column({type: 'integer'})
    parcelas_mensais: number;

    @Column({type: 'float'})
    juros_mensais_pagos: number;

    @Column({type: 'float'})
    inadimplencia: number;

    @Column({ type: 'varchar' })
    estrutura: string;

    @Column({ type: 'varchar' })
    cultura_empresarial: string;

    @Column({ type: 'float' })
    pro_labore: number;

}
