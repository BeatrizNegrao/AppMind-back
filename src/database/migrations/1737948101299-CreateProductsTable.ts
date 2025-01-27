import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProductsTable1737948101299 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "produtos",
                columns: [
                    {
                        name: "id_produto",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "nome",
                        type: "varchar",
                        length: "100",
                        isNullable: false,
                    },
                    {
                        name: "descricao",
                        type: "text",
                        isNullable: true,
                    },
                    {
                        name: "valor",
                        type: "float",
                        isNullable: false,
                    },
                    {
                        name: "quantidade_atual",
                        type: "int",
                        isNullable: false,
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
