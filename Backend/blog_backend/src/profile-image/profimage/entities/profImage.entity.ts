import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Image {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  regNo: string; 

  @Column()
  filename: string;

  @Column()
  filepath: string;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  uploadedAt: Date;
}
