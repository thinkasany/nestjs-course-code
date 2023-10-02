import "reflect-metadata"
import { DataSource } from "typeorm"
import { Article } from "./entity/Article"
import { Tag } from "./entity/Tag"
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
    entities: [Article, Tag],
    migrations: [],
    subscribers: [],
    connectorPackage: 'mysql2',
    extra: {
        authPlugin: 'sha256_password',
    }
})
