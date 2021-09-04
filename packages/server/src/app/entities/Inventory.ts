import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('inventories')
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

  @Column({ type: 'date' })
  lastInput: Date

  @Column({ type: 'date' })
  lastOutput: Date
}

export default Inventory
