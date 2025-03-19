import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: "tab_cursos_embbed_video" })
export class CursosEmbbedVideo {

    @PrimaryGeneratedColumn()
    id: string;

    @Column({ type: 'varchar', length: 255 })
    titulo: string;

    @Column({ type: 'varchar', length: 255 })
    descricao: string;

    @Column({ type: 'varchar', length: 255 })
    curso: string;

    @Column({ type: 'int' })
    modulo: number;

    @Column({ type: 'varchar', length: 255 })
    categoria: string;

    @Column({ type: 'varchar', length: 255 })
    professor: string;

    @Column({ type: 'varchar', length: 255 })
    usuario: string;

    @CreateDateColumn({ type: 'timestamptz', nullable: true })
    data_publicacao: Date;

    @UpdateDateColumn({ type: 'timestamptz', nullable: true })
    data_atualizacao: Date;

    @Column({ type: 'varchar', length: 255 })
    embbed_video: string;



}
