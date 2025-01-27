import "reflect-metadata";
import { DataSource } from "typeorm"
import { CreatureUsersTable1737924315983 } from  './migrations/1737924315983-CreatureUsersTable'
import User from '../app/entities/User'

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "pedro100224",
    database: "mind_app",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [CreatureUsersTable1737924315983],
    subscribers: [],
})
