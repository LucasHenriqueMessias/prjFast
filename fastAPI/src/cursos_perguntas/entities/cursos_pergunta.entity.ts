import { CursosResposta } from 'src/cursos_respostas/entities/cursos_resposta.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity({name: 'tab_cursos_pergunta'})
export class CursosPergunta {

@PrimaryGeneratedColumn()
id: string;

@Column({ type: 'varchar', length: 255 })
pergunta: string;

@Column({ type: 'varchar', length: 255 })
videoaula: string;

@Column({ type: 'varchar', length: 255 })
curso: string;

@OneToMany(() => CursosResposta, resposta => resposta.id_pergunta)
respostas: CursosResposta[];

}
