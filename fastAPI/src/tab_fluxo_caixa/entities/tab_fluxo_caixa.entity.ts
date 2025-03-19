import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "Tab_Fluxo_Caixa" })
export class TabFluxoCaixa {
    
    @PrimaryGeneratedColumn('increment')
    id: number;

    @CreateDateColumn({ type: 'timestamptz' })
    data: Date;

    @Column({ type: 'timestamptz' }) 
    data_ajustada: Date;

    @Column({ type: 'text' })
    banco_origem: string;

    @Column({ type: 'text' })
    Categoria: string;
    
    @Column({ type: 'boolean' })
    tipo: boolean;

    @Column({ type: 'float' })
    valor_movimentacao: number;
    
    @Column({ type: 'text' })
    descricao: string;

    @Column({ type: 'boolean' })
    efetivado: boolean;

    @CreateDateColumn({ type: 'timestamptz' })
    vencimento_original: Date;

    @CreateDateColumn({ type: 'timestamptz' })
    competencia: Date;

}
