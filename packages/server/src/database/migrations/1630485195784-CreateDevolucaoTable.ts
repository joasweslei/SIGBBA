import { MigrationInterface, QueryRunner, Table } from 'typeorm'
import ColumnTypes from '../ColumnTypes'

export class CreateDevolucaoTable1630485195784 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'devolucao',
        columns: [
          {
            name: 'dev_codigo',
            type: ColumnTypes.int,
            unsigned: true,
            isPrimary: true,
            isGenerated: true,
            isUnique: true
          },
          {
            name: 'dev_motivo',
            type: ColumnTypes.varchar,
            length: '500'
          },
          {
            name: 'dev_data',
            type: ColumnTypes.date
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('devolucao')
  }
}
