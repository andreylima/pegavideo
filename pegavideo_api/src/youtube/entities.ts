import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ConsultaYoutube {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ip: string;

  @Column()
  url: string;

}