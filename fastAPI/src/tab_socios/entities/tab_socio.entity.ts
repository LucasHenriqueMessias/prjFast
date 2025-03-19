import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'tab_socios'})
export class TabSocio {
    @PrimaryGeneratedColumn('increment')
    ID_Socio: number;

    @Column({type: 'text', nullable: true})
    cnpj_empresa: string;
    
    @Column({type: 'text', nullable: true})
    pais: string;
    
    @Column({type: 'text', nullable: true})
    nome_socio: string;
    
    @Column({type: 'text', nullable: true})
    codigo_pais: string;
    
    @Column({type: 'text', nullable: true})
    faixa_etaria: string;
    
    @Column({type: 'text', nullable: true})
    cnpj_cpf_do_socio: string;
    
    @Column({type: 'text', nullable: true})
    qualificacao_socio: string;
    
    @Column({type: 'int', nullable: true})
    codigo_faixa_etaria: number;
    
    @Column({type: 'timestamptz', nullable: true})
    data_entrada_sociedade: Date;
    
    @Column({type: 'int', nullable: true})
    identificador_de_socio: number;
    
    @Column({type: 'text', nullable: true})
    cpf_representante_legal: string;
    
    @Column({type: 'text', nullable: true})
    nome_representante_legal: string;
    
    @Column({type: 'int', nullable: true})
    codigo_qualificacao_socio: number;
    
    @Column({type: 'text', nullable: true})
    qualificacao_representante_legal: string;

    @Column({type: 'int', nullable: true})
    codigo_qualificacao_representante_legal: number;

    @Column({type: 'text', nullable: true})
    disc: string;

    @Column({type: 'text', nullable: true})
    serdip: string;

    @Column({type: 'text', nullable: true})
    eneagrama: string;

    @Column({type: 'text', nullable: true})
    hobbies: string;

    @Column({type: 'text', nullable: true})
    relatorio_prospeccao: string;

    @Column({type: 'boolean', nullable: true})
    opcao_pelo_mei: boolean;


}
