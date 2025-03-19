import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'tab_log' })
export class TabLog {
    @PrimaryGeneratedColumn()
    id: string;
    @Column({type: 'text'})
    Usuario: string;
    @CreateDateColumn()
    Data: Date;
    @Column({type: 'text'})
    Acao: string;
    @Column({type: 'text'})
    Tabela: string;
    @Column({type: 'timestamp', nullable: true})
    data_prox_acao: Date;
    @Column({type: 'text', nullable: true})
    acao_prox: string;
    @Column({type: 'boolean'})
    realizado: boolean;
    @Column({type: 'text', nullable: true})
    observacao: string;

}
