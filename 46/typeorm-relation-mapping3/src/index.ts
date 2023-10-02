import { AppDataSource } from "./data-source"
import { Article } from "./entity/Article";
import { Tag } from "./entity/Tag";
import { User } from "./entity/User"

AppDataSource.initialize().then(async () => {
    const entityManager = AppDataSource.manager;

    // const a1 = new Article();
    // a1.title = 'aaaa';
    // a1.content = 'aaaaaaaaaa';

    // const a2 = new Article();
    // a2.title = 'bbbbbb';
    // a2.content = 'bbbbbbbbbb';

    // const t1 = new Tag();
    // t1.name = 'ttt1111';

    // const t2 = new Tag();
    // t2.name = 'ttt2222';

    // const t3 = new Tag();
    // t3.name = 'ttt33333';

    // a1.tags = [t1,t2];
    // a2.tags = [t1,t2,t3];

    // const entityManager = AppDataSource.manager;

    // await entityManager.save(t1);
    // await entityManager.save(t2);
    // await entityManager.save(t3);

    // await entityManager.save(a1);
    // await entityManager.save(a2);

    
    const article = await entityManager.find(Article, {
        relations: {
            tags: true
        }
    });
    
    console.log(article);
    console.log(article.map(item=> item.tags))

    const tags = await entityManager.find(Tag, {
        relations: {
            articles: true
        }
    });
    
    console.log(tags);
    

    // id 为 2 的文章的标签只保留包含 111 的，并且还改了标题：
    // const article = await entityManager.findOne(Article, {
    //     where: {
    //         id: 2
    //     },
    //     relations: {
    //         tags: true
    //     }
    // });
    
    // article.title = "ccccc";
    
    // article.tags = article.tags.filter(item => item.name.includes('ttt111'));
    
    // await entityManager.save(article);

}).catch(error => console.log(error))
