import { MigrationInterface, QueryRunner, Table } from 'typeorm'
import ColumnTypes from '../ColumnTypes'

export class CreateSaidaTable1630485189108 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'saida',
        columns: [
          {
            name: 'sd_codigo',
            type: ColumnTypes.int,
            unsigned: true,
            isPrimary: true,
            isGenerated: true,
            isUnique: true
          },
          {
            name: 'sd_data',
            type: ColumnTypes.date
          },
          {
            name: 'sd_status',
            type: ColumnTypes.varchar,
            length: '15',
            unsigned: true,
            default: 'aguardando',
            enum: ['aguardando', 'confirmado', 'cancelado', 'invalidado']
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('saida')
  }
}
