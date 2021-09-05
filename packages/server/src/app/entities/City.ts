import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('cities')
class City {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  city: string

  @Column('nullable')
  state: number

  @Column()
  uf: number

  @Column()
  cep: string

  @Column('nullable')
  codMunicipality: string

  @Column('nullable')
  ibge: string
}

export default City
