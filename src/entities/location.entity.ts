import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("location")
export class LocationEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  building: string;

  @Column()
  number: string;

  @Column({ type: 'float' })
  area: number;

  @Column({ nullable: false, default: -1 })
  parentId: number;
}
