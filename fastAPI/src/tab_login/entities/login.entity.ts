import { TabLoja } from 'src/tab_cliente/entities/tab_loja.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
@Entity({ name: 'tab_login' })
export class Login {
    @PrimaryGeneratedColumn('increment')
    id: number;
    @Column({ unique: true, type: 'text' })
    user: string;
    @Column({ type: 'text' })
    password: string;

    @Column({ type: 'boolean', default: true })
    active: boolean;

    @Column({ type: 'text', default: 'user' })
    role: string;

    @Column({ type: 'text' })
    department: string;

    @Column({ type: 'float'})
    nivel: number;
}
