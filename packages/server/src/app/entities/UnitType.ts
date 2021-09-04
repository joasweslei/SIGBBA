import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('unitType')
class UnitType {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  description: string
}
export default UnitType
