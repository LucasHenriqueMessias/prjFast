import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'tab_consultor_comercial' })
export class TabConsultorComercial {
    @PrimaryGeneratedColumn('increment')
    id: number;
    @Column({ unique: true, type: 'text' })
    nome_consultor: string;
    @Column({ unique: true, type: 'text' })
    login: string;
    @Column({ type: 'int' })
    clientes_totais: number;
    @Column({ type: 'int' })
    clientes_atuais: number;
    @Column({ type: 'float' })
    ticket_medio: number;
    @Column({ type: 'int' })
    visitas_mes: number;
    @Column({ type: 'int' })
    reunioes_mes: number;
    @Column({ type: 'float' })
    meta_reunioes_mes: number;
    @Column({type: 'integer'})
    lista: number;
    @Column({type: 'integer'})
    Contatos: number;
    @Column({type: 'integer'})
    propostas: number;
    @Column({type: 'float'})
    valor_proposta: number;
    @Column({type: 'integer'})
    contratos_fechados: number;
    @Column({type: 'float'})
    meta_ideal: number;
    @Column({type: 'float'})
    meta_realizada: number;
    @Column({type: 'float'})
    porcentagem_meta_atingida: number;
    @Column({type: 'int'})
    agendadas_lead: number;
    @Column({type: 'int'})
    fechamento_lead: number;
    @Column({type: 'int'})
    realizadas_lead: number;
    @Column({type: 'int'})
    agendadas_pp: number;
    @Column({type: 'int'})
    fechamento_pp: number;
    @Column({type: 'int'})
    realizadas_pp: number;
    
}
