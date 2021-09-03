import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('food_outputs')
class FoodOutput {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  date: Date

  @Column('enum')
  status: 'waiting' | 'confirmed' | 'cancelled' | 'invalidated'

  // @ManyToOne(() => Entity, entity => entity.foodOutput)
  // entity: Entity;
}

export default FoodOutput
