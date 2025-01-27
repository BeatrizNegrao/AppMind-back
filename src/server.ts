import "reflect-metadata";
import { AppDataSource } from './database/data-source';
import api from './config/api';
import routers from './app/routes/routes';

const PORT = 3333;

api.use(routers);

AppDataSource.initialize().then(async () => {
    console.log('Database OK');
    api.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
    });
}).catch(error => console.log(error));