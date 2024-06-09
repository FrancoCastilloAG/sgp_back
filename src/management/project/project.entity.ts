import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Team } from '../team/team.entity';
import { Task } from '../task/task.entity';
import { Resource } from '../resource/resource.entity';

@Entity()
export class Project {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    amount_participants: number;

    @Column()
    start_date: Date;

    @Column()
    end_date: Date;

    @OneToMany(() => Team, team => team.project)
    teams: Team[];

    @OneToMany(() => Task, task => task.project)
    tasks: Task[];

    @OneToMany(() => Resource, resource => resource.project)
    resources: Resource[];
}