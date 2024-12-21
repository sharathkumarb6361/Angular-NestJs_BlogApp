import { Blog } from "src/blogs/entities/blog.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Profile{
    @PrimaryGeneratedColumn()
    profileid:number

    @Column({nullable:false})
    name:string

    @Column({unique :true})
    regno:string

    @Column({nullable:false})
    password:string

    @Column({nullable:false})
    branch:string

    @Column({nullable:false})
    sem:string

    @Column()
    dob:Date

    @Column({unique:true})
    email:string
   
    @Column()
    role:string;
    @OneToMany(() => Blog, (blog) => blog.profile)
    blogs: Blog[];
}