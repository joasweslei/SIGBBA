import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('inventory')
class Inventory {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  codAliment: string

  @Column()
  inventoryMin: number

  @Column()
  inventoryMax: number

  @Column()
  inventoryActual: number

  @Column()
  lastInput: Date

  @Column()
  lastOutput: Date
}

export default Inventory
