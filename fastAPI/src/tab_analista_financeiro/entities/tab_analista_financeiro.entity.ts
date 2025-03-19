import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({name: 'tab_analista_financeiro'})
export class TabAnalistaFinanceiro {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  nome: string;

  @Column({ type: 'varchar', length: 255 })
  email: string;

  @Column({ type: 'varchar', length: 20 })
  telefone: string;

  @Column({ type: 'varchar', length: 255 })
  departamento: string;

  @Column({ type: 'date' })
  data_contratacao: Date;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  salario: number;

  @Column({ type: 'varchar', length: 255 })
  usuario: string;

  @Column({ type: 'varchar', length: 255 })
  nome_analista_financeiro: string;

  @Column({ type: 'int' })
  tempo_medio_resposta: number;

  @Column({ type: 'int' })
  nps_analista: number;

  @Column({ type: 'int' })
  media_contatos_semanais: number;
}