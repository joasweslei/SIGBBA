import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('city')
class City {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  city: string

  @Column()
  stage: number

  @Column()
  uf: number

  @Column()
  cep: string

  @Column()
  ibge: string
}

export default City
