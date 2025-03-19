import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "Tab_Regime_Tributario"})
export class TabRegimeTributario {
    @PrimaryGeneratedColumn('increment')
    id: number;
    @Column({ type: 'float' })
    DAS: number;
    @Column({ type: 'float' })
    Pis: number;
    @Column({ type: 'float' })
    Cofins: number;
    @Column({ type: 'float' })
    IRPJ: number;
    @Column({ type: 'float' })
    IPI: number;
    @Column({ type: 'float' })
    ICMS: number;
    @Column({ type: 'float' })
    ISS: number;
    @Column({ type: 'float' })
    previdencia: number;
    @CreateDateColumn({ type: 'timestamptz', nullable: true })
    Data_Regime: Date;
    @Column({ type: 'text'})
    Descricao: string;
}
