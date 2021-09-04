import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('transferEntity')
class TransferEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  namePopular: string

  @Column()
  cnpj: string

  @Column()
  address: string

  @Column()
  cpfResp: string

  @Column()
  adviceData: string

  @Column()
  phoneResp: string

  @Column()
  nameCorporate: string

  @Column()
  daysOfOperation: string

  @Column()
  email: string

  @Column()
  numOperation: number
}
export default TransferEntity
