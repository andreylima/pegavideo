import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ConsultaInstagram {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ip: string;

  @Column()
  url: string;

}