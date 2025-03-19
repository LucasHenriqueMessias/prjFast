import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('tab_consultor_financeiro')
export class TabConsultorFinanceiro {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  usuario: string;

  @Column({ type: 'varchar' })
  nome_consultor_financeiro: string;

  @Column({ type: 'varchar' })
  email: string;

  @Column({ type: 'varchar' })
  telefone: string;

  @Column({ type: 'varchar' })
  celular: string;

  @Column({ type: 'varchar' })
  senha: string;

  @Column({ type: 'varchar' })
  salt: string;

  @Column({ type: 'varchar' })
  hash: string;

  @Column({ type: 'boolean' })
  active: boolean;

  @Column({ type: 'int' })
  nivel: number;

  @Column({ type: 'timestamp' })
  data_criacao: Date;

  @Column({ type: 'timestamp' })
  data_atualizacao: Date;

  @Column({ type: 'varchar' })
  usuario_criacao: string;

  @Column({ type: 'varchar' })
  usuario_atualizacao: string;

  @Column({ type: 'float' })
  taxa_reunioes_realizaddas: number;

  @Column({ type: 'float' })
  indice_cancelamento: number;
}