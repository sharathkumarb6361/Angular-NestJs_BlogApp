import {Entity,Column,PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class Magazine{

    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    title: string;
  
    @Column()
    description: string;
  
    @Column()
    pdfUrl: string;
}