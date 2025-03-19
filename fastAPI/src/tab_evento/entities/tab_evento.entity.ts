import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'tab_evento' })
export class TabEvento {

    @PrimaryGeneratedColumn()
    id: string;
    @Column({type: 'timestamp'})
    data_evento: Date;
    @Column({type: 'text'})
    nome_evento: string;
    @Column({type: 'text'})
    descricao: string;
    @Column({type: 'text'})
    local: string;
    @Column({type: 'text'})
    status: string;
    @Column({type: 'text'})
    usuario: string;
    @CreateDateColumn()
    data_criacao: Date;
}
