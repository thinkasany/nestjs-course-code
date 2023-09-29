import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
import { In } from "typeorm";

AppDataSource.initialize().then(async () => {
    // const user = new User()
    // user.id = 1;
    // user.firstName = "aaa111"
    // user.lastName = "bbb111"
    // user.age = 25
    // await AppDataSource.manager.save(user);

    // await AppDataSource.manager.save(User, [
    //     { firstName: 'ccc', lastName: 'ccc', age: 21},
    //     { firstName: 'ddd', lastName: 'ddd', age: 22},
    //     { firstName: 'eee', lastName: 'eee', age: 23}
    // ]);

    // await AppDataSource.manager.delete(User, 1);
    // await AppDataSource.manager.delete(User, [2,3]);

    // const user = new User();
    // user.id = 59;
    // await AppDataSource.manager.remove(User, user);
  
    // await AppDataSource.manager.save(User, [
    //     { firstName: 'ccc', lastName: 'ccc', age: 21},
    //     { firstName: 'ddd', lastName: 'ddd', age: 22},
    //     { firstName: 'eee', lastName: 'eee', age: 23}
    // ]);
    // const users = await AppDataSource.manager.find(User);
    // console.log(users);

    // const users = await AppDataSource.manager.findBy(User, {
    //     age: 23
    // });
    // console.log(users);

    // const [users, count] = await AppDataSource.manager.findAndCount(User);
    // console.log(users, count);

    // const [users, count] = await AppDataSource.manager.findAndCountBy(User, {
    //     age: 23
    // })
    // console.log(users, count);

    // const user = await AppDataSource.manager.findOne(User, {
    //     select: {
    //         firstName: true,
    //         age: true
    //     },
    //     where: {
    //         id: 60
    //     },
    //     order: {
    //         age: 'ASC'
    //     }
    // });
    // console.log(user);

    // const users = await AppDataSource.manager.find(User, {
    //     select: {
    //         firstName: true,
    //         age: true
    //     },
    //     where: {
    //         id: In([60, 61, 64])
    //     },
    //     order: {
    //         age: 'ASC'
    //     }
    // });
    // console.log(users);

    // try {
    //     const user = await AppDataSource.manager.findOneOrFail(User, {
    //         where: {
    //             id: 666
    //         }
    //     });
    //     console.log(user);
    // }catch(e) {
    //     console.log(e);
    //     console.log('没找到该用户');
    // }
    
    // const users = await AppDataSource.manager.query('select * from user where age in(?, ?)', [60, 61]);
    // console.log(users);


const queryBuilder = await AppDataSource.manager.createQueryBuilder();

const user = await queryBuilder.select("user")
    .from(User, "user")
    .where("user.age = :age", { age: 21 })
    .getOne();

console.log(user);

    // console.log("Inserting a new user into the database...")
    // const user = new User()
    // user.firstName = "Timber"
    // user.lastName = "Saw"
    // user.age = 25
    // await AppDataSource.manager.save(user)
    // console.log("Saved a new user with id: " + user.id)

    // console.log("Loading users from the database...")
    // const users = await AppDataSource.manager.find(User)
    // console.log("Loaded users: ", users)

    // console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))
