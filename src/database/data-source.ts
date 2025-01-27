import "reflect-metadata";
import { DataSource } from "typeorm";
import { CreatureUsersTable1737924315983 } from "./migrations/1737924315983-CreatureUsersTable";
import { CreateProductsTable1737948101299 } from "./migrations/1737948101299-CreateProductsTable";
import User from "../app/entities/User";
import Product from "../app/entities/Product";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "pedro100224",
    database: "mind_app",
    synchronize: false, // Alterado para false, pois agora você está usando migrations
    logging: true, // Ativado para visualizar logs durante as operações
    entities: [User, Product], // Adicionado a entidade Product
    migrations: [
        CreatureUsersTable1737924315983,
        CreateProductsTable1737948101299, // Adicionado a migration CreateProductsTable
    ],
    subscribers: [],
});
