import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity({ name: 'tab_helpdesk' })
export class TabHelpdesk {

    @PrimaryGeneratedColumn()
    id: string;
    @Column({type: 'text'})
    Solicitante: string;
    @Column({type: 'text'})
    Responsavel: string;
    @Column({type: 'text'})
    Setor: string;
    @Column({type: 'text'})
    Titulo: string;
    @Column({type: 'text'})
    Descricao: string;
    @Column({type: 'text'})
    Anotacao: string
    @Column({type: 'text'}) //(BackLog, Aguardando Requisitos, Em Progresso, Concluído)
    Kanban: string;
    @Column({type: 'date', nullable: true}) 
    Data_Conclusao: Date;
    @Column({type: 'date', nullable: true})
    Expectativa_Conclusao: Date;
    @CreateDateColumn()
    Data: Date;
}

