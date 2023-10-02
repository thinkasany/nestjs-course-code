import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm"
import { Article } from "./Article";
@Entity()
export class Tag {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 100
    })
    name: string;

    @ManyToMany(() => Article, (Article) => Article.tags)
    articles: Article[]
}
