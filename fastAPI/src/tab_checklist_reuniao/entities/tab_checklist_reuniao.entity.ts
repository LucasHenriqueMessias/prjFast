import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'tab_checklist_reuniao' })
export class TabChecklistReuniao {

    @PrimaryGeneratedColumn('increment')
    id: number;
    @Column({ type: 'text' })
    cnpj: string;
    @CreateDateColumn({ type: 'timestamptz', nullable: true })
    data: Date;


    /*
    Inserir todos os valores do checklist
    */

}
