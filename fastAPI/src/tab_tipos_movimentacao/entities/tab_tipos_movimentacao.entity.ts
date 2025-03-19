import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'tab_tipos_movimentacao' })
export class TabTiposMovimentacao {
    
    @PrimaryGeneratedColumn('increment')
    id_movimentacao: number;

    @Column({ type: 'text' })
    descricao: string;
    
    @Column({ type: 'text' })
    classificacao: string;
    
    @Column({type: 'boolean'})
    tipo: boolean;
}
