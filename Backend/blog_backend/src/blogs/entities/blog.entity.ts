import { Profile } from 'src/profile/entites/profile.entity';

import{Entity,Column,PrimaryGeneratedColumn, ManyToOne} from 'typeorm'

@Entity()
export class Blog{
    @PrimaryGeneratedColumn()
    Blog_id:number;

    @Column({ type: 'varchar', length: 255 })
    title:string;

    @Column({ type: 'text'})
    image:string;

    @Column({ type: 'text' })
    blog:string;

    @ManyToOne(() => Profile, (profile) => profile.blogs)
    profile: Profile;
}