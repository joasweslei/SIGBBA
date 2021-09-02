import { MigrationInterface, QueryRunner, Table } from 'typeorm'
import ColumnTypes from '../ColumnTypes'

export class CreateCestaTable1630485153865 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'cesta',
        columns: [
          {
            name: 'cst_codigo',
            type: ColumnTypes.int,
            unsigned: true,
            isPrimary: true,
            isGenerated: true,
            isUnique: true
          },
          {
            name: 'cst_nome',
            type: ColumnTypes.varchar,
            length: '255'
          },
          {
            name: 'cst_descricao',
            type: ColumnTypes.varchar,
            length: '500'
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('cesta')
  }
}
