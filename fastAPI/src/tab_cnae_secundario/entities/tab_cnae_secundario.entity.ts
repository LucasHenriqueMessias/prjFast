import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'tab_cnae_secundario'})
export class TabCnaeSecundario {
    @PrimaryGeneratedColumn('increment')
    id_cnae: number;
    @Column({ type: 'int' })
    codigo: number;
    @Column({ type: 'text' })
    descricao: string;
    @Column({ type: 'text', nullable: false })
    cnpj: string;

}


