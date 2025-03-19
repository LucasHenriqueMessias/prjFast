import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tab_upload' })
export class TabUpload {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    tipoArquivo: string;
    
    @Column()
    filePath: string; // Campo para armazenar o caminho do arquivo PDF

    @Column()
    usuario: string;

}