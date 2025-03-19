import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn } from 'typeorm';

@Entity({ name: 'tab_ferramenta' })
export class TabFerramenta {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'text' })
  nome_ferramenta: string;

  @CreateDateColumn({ type: 'timestamptz', nullable: true })
  data_criacao: Date;

  @UpdateDateColumn({ type: 'timestamptz', nullable: true })
  data_alteracao: Date;

  @Column({ type: 'text' })
  usuario_criacao: string;

  @Column({ type: 'text' })
  diretorio: string;

  @Column({ type: 'text' })
  descricao: string;

  @Column({ type: 'text' })
  tipo: string;

  @Column({ type: 'text' })
  url: string;
}