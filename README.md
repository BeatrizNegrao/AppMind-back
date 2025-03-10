# Backend para a aplicação de gerenciamento de produtos


## Requisitos de Instalação

### 1. Instalar Dependências

```
npm install
```

### 2. Configurar o Banco de Dados

1. Crie um banco de dados no MySQL
2. Localize o arquivo `dataMind/src/database/data-source.ts`
3. Atualize as credenciais de acordo com sua configuração local e altere conforme suas credenciais:
 
```typescript
export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,             
    username: "root",     
    password: "sua_senha",  
    database: "mind_app", 
    synchronize: true,
    logging: false,
    entities: [User, Product],
    migrations: [
        CreatureUsersTable1737924315983,
        CreateProductsTable1737948101299,
    ],
    subscribers: [],
});
```

### 3. Executar Migrations

Execute o comando abaixo para criar as tabelas no banco de dados pelo TypeORM:
```
npm run typeorm -- -d ./src/database/data-source.ts migration:run
```
Para mais informações sobre o TypeORM, consulte a documentação oficial:
[https://typeorm.io/](https://typeorm.io/)


## Executando a Aplicação

Para iniciar o servidor de desenvolvimento:

```
npm run dev:server
```
