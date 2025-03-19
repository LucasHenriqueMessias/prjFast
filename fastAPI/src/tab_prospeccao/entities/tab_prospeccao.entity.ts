import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity({ name: 'tab_prospeccao' })
export class TabProspeccao {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ type: 'timestamptz', nullable: true })
  data: Date;
  
  @Column({ type: 'varchar', length: 255 })
  consultor_comercial: string;

  @Column({ type: 'varchar', length: 255 })
  empresa: string;

  @Column({ type: 'varchar', length: 20 })
  cnpj_cpf: string;

  @Column({ type: 'varchar', length: 255 })
  fundacao: string;

  @Column({ type: 'varchar', length: 255 })
  localizacao: string;

  @Column({ type: 'varchar', length: 20 })
  telefone: string;

  @Column({ type: 'varchar', length: 255 })
  responsavel: string;

  @Column({ type: 'varchar', length: 255 })
  email: string;

  @Column({ type: 'boolean' })
  indicacao: boolean;

  @Column({ type: 'varchar', length: 255, nullable: true })
  indicacao_nome: string;
}