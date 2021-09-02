import { MigrationInterface, QueryRunner, Table } from 'typeorm'
import ColumnTypes from '../ColumnTypes'

export class CreateAlimentoTable1630485162020 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'alimento',
        columns: [
          {
            name: 'alm_codigo',
            isPrimary: true,
            type: ColumnTypes.int,
            isUnique: true,
            isGenerated: true,
            unsigned: true
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('alimento')
  }
}
