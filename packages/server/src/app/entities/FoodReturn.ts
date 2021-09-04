import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('food_returns')
class FoodReturn {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  returnCause: string

  @Column()
  date: string
}

export default FoodReturn
