import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name: 'tab_notificacao' })
export class TabNotificacao {

    @PrimaryGeneratedColumn()
    id: string;
    @Column({type: 'text'})
    notification: string;
    @Column({type: 'text'})
    user: string;
    @Column({type: 'text'})
    author: string;
    @Column({type: 'boolean'})
    active: boolean;
}
