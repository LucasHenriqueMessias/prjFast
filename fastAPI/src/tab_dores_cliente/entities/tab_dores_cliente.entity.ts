import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tab_dores_cliente' })
export class TabDoresCliente {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    cliente: string;

    @Column()
    consultor: string;

    @Column({ type: 'int' })
    ausencia_salario: number;

    @Column({ type: 'int' })
    desconhecimento_lucratividade: number;

    @Column({ type: 'int' })
    precos_informal: number;

    @Column({ type: 'int' })
    ausencia_projecao: number;

    @Column({ type: 'int' })
    centralizacao_decisoes: number;

    @Column({ type: 'int' })
    ausencia_planejamento: number;

    @Column({ type: 'int' })
    ausencia_estrategia: number;

    @Column({ type: 'int' })
    inadequacao_estrutura: number;

    @Column({ type: 'int' })
    ausencia_controles: number;

    @Column({ type: 'int' })
    ausencia_processos: number;

    @Column({ type: 'int' })
    ausencia_tecnologia: number;

    @Column({ type: 'int' })
    ausencia_inovacao: number;

    @Column({ type: 'int' })
    ausencia_capital: number;

    @Column({ type: 'int' })
    utilizacao_linhas_credito: number;

    @Column({ type: 'int' })
    suporte_contabil_inadequado: number;
}