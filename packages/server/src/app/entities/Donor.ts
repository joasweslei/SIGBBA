import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('donor')
class Doador {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    donor_name: string

    @Column()
    cpf: string

    @Column()
    cnpj: string

    @Column()
    city: string

    @Column()
    uf: string

    @Column()
    responsable_name: string

    @Column()
    cpf_response: string

    @Column()
    full_address: string

    @Column()
    contact_responsable: string

    @Column()
    framework: string

}