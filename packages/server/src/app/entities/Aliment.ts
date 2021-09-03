import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('aliments')
class Aliment {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  description: string
}

export default Aliment
