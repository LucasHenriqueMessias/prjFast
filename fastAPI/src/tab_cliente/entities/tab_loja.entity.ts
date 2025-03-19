import { Login } from "src/tab_login/entities/login.entity";
import { TabCnaeSecundario } from "src/tab_cnae_secundario/entities/tab_cnae_secundario.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'tab_cliente' })
export class TabLoja {

    @PrimaryGeneratedColumn('increment')
    id_loja: number;

    @Column({ type: 'text' })
    uf: string;

    @Column({ type: 'int' })
    cep: number;

    @Column({ type: 'text' })
    cnpj: string;

    @Column({ type: 'text', nullable: true })
    pais: null;

    @Column({ type: 'text' })
    email: string;

    @Column({ type: 'text' })
    porte: string;

    @Column({ type: 'text' })
    bairro: string;

    @Column({ type: 'text' })
    numero: string;

    @Column({ type: 'text' })
    municipio: string;

    @Column({ type: 'text' })
    logradouro: string;

    @Column({ type: 'int' })
    cnae_fiscal: number;

    @Column({ type: 'text', nullable: true })
    complemento: string;

    @Column({ type: 'text' })
    razao_social: string;

    @Column({ type: 'text' })
    nome_fantasia: string;

    @Column({ type: 'float' })
    capital_social: number;

    @Column({ type: 'text' })
    ddd_telefone_1: string;

    @Column({ type: 'text' })
    ddd_telefone_2: string;

    @Column({ type: 'text' })
    natureza_juridica: string;

    @Column({ type: 'bool' })
    opcao_pelo_simples: boolean;

    @Column({ type: 'text', nullable: true })
    cnae_fiscal_descricao: string;

    @Column({ type: 'text' })
    data_situacao_cadastral: string;

    @Column({ type: 'text', nullable: true })
    descricao_situacao_cadastral: string;

    @Column({ type: 'text', nullable: true })
    descricao_identificador_matriz_filial: string;

    @Column({ type: 'float', nullable: true })
    renda_bruta_inicial?: number;

    @Column({ type: 'float', nullable: true })
    renda_bruta_atual?: number;

    @Column({ type: 'float', nullable: true })
    renda_liquida_inicial?: number;

    @Column({ type: 'float', nullable: true })
    renda_liquida_atual?: number;

    @CreateDateColumn({ type: 'timestamptz', nullable: true })
    data_criacao?: Date;

    @UpdateDateColumn({ type: 'timestamptz', nullable: true })
    data_alteracao?: Date;

    @ManyToOne(() => TabCnaeSecundario)
    @JoinColumn({ name: 'cnae_secundario_id' })
    cnae_secundario: TabCnaeSecundario;

    @Column({ type: 'int', default: 0 })
    numero_funcionarios: number;

    @Column({ type: 'float' })
    valor_faturamento: number;

    @Column({ type: 'float' })
    valor_faturamento_inicial: number;

    @Column({ type: 'text' })
    ponto_apoio: string;

    @Column({ type: 'text' })
    perfil: string;

    @Column({ type: 'text' })
    area_atuacao: string;

    @Column({ type: 'text' })
    segmento: string;

    @Column({ type: 'int' })
    numero_reunioes: number;

    @Column({ type: 'text' })
    status: string;

    @Column({ type: 'timestamptz' })
    data_contratacao_fast: Date;

    @Column({ type: 'timestamptz', nullable: true })
    data_saida_fast: Date;

    @Column({ type: 'text' })
    nome_ponte: string;
}
