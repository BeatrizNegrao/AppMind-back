import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatureUsersTable1737924315983 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable (
            new Table({
                name: 'usuarios',
                columns: [
                   {
                    name: 'id_usuario',
                    type: 'int',
                    isPrimary: true,
                    generationStrategy: 'increment'
                   },

                   {
                    name: 'nome',
                    type: 'varchar',
                    length: '100',
                    isNullable: false
                   },

                   {
                    name: 'email',
                    type: 'varchar',
                    length: '100',
                    isNullable: false
                   },

                   {
                    name: 'senha',
                    type: 'varchar',
                    length: '200',
                    isNullable: false
                   }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
