import { CursosPergunta } from 'src/cursos_perguntas/entities/cursos_pergunta.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity({name: 'tab_cursos_resposta'})
export class CursosResposta {

@PrimaryGeneratedColumn()
id: string;

@ManyToOne(() => CursosPergunta, pergunta => pergunta.respostas)
id_pergunta: CursosPergunta;

@Column({ type: 'varchar', length: 255 })
resposta: string;

@Column({type: 'boolean'})
correta: boolean;

}
