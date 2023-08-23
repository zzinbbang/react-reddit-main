import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "postgres-aryeon.cb2l3zpriete.ap-northeast-2.rds.amazonaws.com",
    port: 5432,
    username: "postgres",
    password: "anaryeoni",
    database: "reddit",
    synchronize: true,
    logging: false,
    entities: ["src/entities/**/*.ts"],
    migrations: [],
    subscribers: [],
})
