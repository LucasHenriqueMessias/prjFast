import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "Tab_Agenda"})
export class TabReuniao {
    @PrimaryGeneratedColumn('increment')
    id: number;
    @Column({type: 'text'})
    user: string;
    @Column({type: 'text'})
    cliente: string;
    @Column({type: 'text'})
    status: string;
    @Column({type: 'text'})
    tipo_reuniao: string;
    @Column({type: 'text'})
    local_reuniao:string;
    @Column({type: 'text'})
    Ata_reuniao: string;
    @Column({type: 'timestamptz'})
    data_marcada: Date;
    @Column({type: 'timestamptz'})
    data_realizada: Date;
    @CreateDateColumn({ type: 'timestamptz', nullable: true })
    data_criacao: Date;
    @Column({type: 'text'})
    caminho: string;
    @Column({type: 'float'})
    nps_reuniao: number; 

}
