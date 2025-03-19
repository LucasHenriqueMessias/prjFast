import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "Tab_Dre" })
export class TabDre{

    @PrimaryGeneratedColumn('increment')
    id: number;
    @CreateDateColumn({ type: 'timestamptz', nullable: true })
    Data: Date;
    @Column({ type: 'text' })
    Descricao: string;
    @Column({ type: 'float' })
    Valor: number;
    @Column({ type: 'float' })
    AnaliseVertical: number;
    @Column({ type: 'float' })
    AnaliseHorizontal: number;
    @Column({ type: 'text' })
    Cliente: string;
    @Column({ type: 'text' })
    Usuario: string;

}
