import "reflect-metadata"
import { DataSource } from "typeorm"
import { IdCard } from "./entity/IdCard"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456",
    database: "typeorm_test",
    synchronize: true,
    logging: true,
    entities: [User, IdCard],
    migrations: [],
    subscribers: [],
})
