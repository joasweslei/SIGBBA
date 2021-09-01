/* eslint-disable indent */
/* eslint-disable brace-style */
import { MigrationInterface, QueryRunner, Table } from 'typeorm'
import ColumnTypes from '../ColumnTypes'

export class CreateTipoContagemTable1630485181448
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'tipo_contagem',
        columns: [
          {
            name: 'ctg_codigo',
            type: ColumnTypes.int,
            unsigned: true,
            isUnique: true,
            isGenerated: true
          },
          {
            name: 'ctg_nome',
            type: ColumnTypes.varchar,
            length: '50'
          },
          {
            name: 'ctg_sigla',
            type: ColumnTypes.varchar,
            length: '3'
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('tipo_contagem')
  }
}
