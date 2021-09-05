import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('cities')
class City {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  city: string

  @Column({
    nullable: true
  })
  state: number

  @Column()
  uf: number

  @Column()
  cep: string

  @Column({
    nullable: true
  })
  codMunicipality: string

  @Column({
    nullable: true
  })
  ibge: string
}

export default City
