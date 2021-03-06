import { MigrationInterface, QueryRunner } from 'typeorm'

export class CreateDatabaseStructure1631403876108
  implements MigrationInterface
{
  name = 'CreateDatabaseStructure1631403876108'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
    await queryRunner.query(
      `CREATE TABLE "donors" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "donorName" character varying NOT NULL, "cpf" character varying NOT NULL, "cnpj" character varying NOT NULL, "city" character varying NOT NULL, "uf" character varying NOT NULL, "responsableName" character varying NOT NULL, "cpfResponse" character varying NOT NULL, "fullAddress" character varying NOT NULL, "contactResponsable" character varying NOT NULL, "framework" character varying NOT NULL, CONSTRAINT "PK_7fafae759bcc8cc1dfa09c3fbcf" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "farmers" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nameResp1" character varying NOT NULL, "cpfResp1" character varying NOT NULL, "nameMotherResp1" character varying NOT NULL, "dateBirthResp1" date NOT NULL, "sexResp1" character varying NOT NULL, "nameResp2" character varying NOT NULL, "cpfResp2" character varying NOT NULL, "nameMotherResp2" character varying NOT NULL, "dateBirthResp2" date NOT NULL, "sexResp2" character varying NOT NULL, "address" character varying NOT NULL, "numDep" character varying NOT NULL, "phone" character varying NOT NULL, "nis" integer NOT NULL, "city" character varying NOT NULL, "uf" character varying NOT NULL, "validateOflicense" date NOT NULL, "entityServide" character varying NOT NULL, "dap" character varying NOT NULL, "validateDap" integer NOT NULL, "cardProducer" character varying NOT NULL, "passwordProducer" character varying NOT NULL, "foodGet" character varying NOT NULL, CONSTRAINT "PK_ccbe91e5e64dde1329b4c153637" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "order" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "dateCreated" TIMESTAMP NOT NULL, "scheduledDate" date, "orderStatus" character varying NOT NULL, "priceOrder" integer NOT NULL, "idFarmerId" uuid, "createdById" uuid, CONSTRAINT "PK_1031171c13130102495201e3e20" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "aliment_order" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "quantityUn" integer, "quantityKg" integer, "unityPrice" integer NOT NULL, "totalPrice" integer NOT NULL, "alimentId" uuid, "orderId" uuid, CONSTRAINT "PK_9a9767b6e916a56444e23bed8d2" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "aliment_received" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "quantityUn" integer, "dateReceived" TIMESTAMP NOT NULL, "quantityKg" integer, "alimentId" uuid, "userReceivedId" uuid, CONSTRAINT "REL_0ab7317a2e9508583ff573d95f" UNIQUE ("alimentId"), CONSTRAINT "REL_13668119abf9a2510cabb704f8" UNIQUE ("userReceivedId"), CONSTRAINT "PK_d7e65cce00c327d7c54aed2d6fe" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "username" character varying NOT NULL, "email" character varying NOT NULL, "userpassword" character varying NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "donations" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "timeDon" TIMESTAMP NOT NULL, "userReceivedId" uuid, "idDonorId" uuid, CONSTRAINT "PK_c01355d6f6f50fc6d1b4a946abf" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "aliment_donations" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "quantityUn" integer, "quantityKg" integer, "donationId" uuid, "alimentoId" uuid, CONSTRAINT "PK_396c26d77d116886895ded53fd4" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "devolutions" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "reason" character varying NOT NULL, "date" date NOT NULL, CONSTRAINT "PK_87fafa16d2b3a0a090af3b79711" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "aliment_output_devolutions" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "quantity" integer NOT NULL, "alimentOutputId" uuid, "devolutionId" uuid, CONSTRAINT "PK_6530e45d37bcb4b1f410e5e7538" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "count_types" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "initial" character varying NOT NULL, CONSTRAINT "PK_04db521c4f7b61763a1ccadafc8" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "dependent_families" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nameDepen" character varying NOT NULL, "databirth" date NOT NULL, "familyId" uuid, CONSTRAINT "PK_55b72a68c0880171feab0e09699" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "families" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nameResp1" character varying NOT NULL, "cpfResp1" character varying NOT NULL, "nameMotherResp1" character varying NOT NULL, "dateBirthResp1" date NOT NULL, "sexResp1" character varying NOT NULL, "fetchBasketResp1" boolean NOT NULL, "nis1" character varying NOT NULL, "nameResp2" character varying NOT NULL, "cpfResp2" character varying NOT NULL, "nameMotherResp2" character varying NOT NULL, "dateBirthResp2" date NOT NULL, "sexResp2" character varying NOT NULL, "fetchBasketResp2" boolean NOT NULL, "nis2" character varying NOT NULL, "address" character varying NOT NULL, "numDep" character varying NOT NULL, "phone" character varying NOT NULL, "incomeCapita" character varying NOT NULL, "entityServide" character varying NOT NULL, "descAgeRange" character varying NOT NULL, "totalResiden" integer NOT NULL, "socialService" character varying NOT NULL, "numAbsence" character varying NOT NULL, "basket" character varying NOT NULL, "dataInit" date NOT NULL, "dateEnd" date NOT NULL, "typeReceive" character varying NOT NULL, "transferEntityId" uuid, CONSTRAINT "PK_70414ac0c8f45664cf71324b9bb" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "transfer_entities" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "namePopular" character varying NOT NULL, "cnpj" character varying NOT NULL, "address" character varying NOT NULL, "cpfResp" character varying NOT NULL, "adviceData" character varying NOT NULL, "phoneResp" character varying NOT NULL, "nameCorporate" character varying NOT NULL, "daysOfOperation" character varying NOT NULL, "email" character varying NOT NULL, "numOperation" integer NOT NULL, CONSTRAINT "PK_2669f53c1ce9cbcac1aa97add53" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "entity_employees" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "cpf" character varying NOT NULL, "rg" character varying NOT NULL, "phone" character varying NOT NULL, "functionEmployee" character varying NOT NULL, "typeEntity" character varying NOT NULL, "beneficiaryEntityId" uuid, "transferEntityId" uuid, CONSTRAINT "PK_16a9019d75f48e3e129d17fee4d" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "beneficiary_entities" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "popularName" character varying NOT NULL, "cnpj" character varying NOT NULL, "fullAnddress" character varying NOT NULL, "responsibleCpf" character varying NOT NULL, "adviceData" character varying NOT NULL, "responsiblePhone" character varying NOT NULL, "corporateName" character varying NOT NULL, "WorkingDays" character varying NOT NULL, "responsibleEmail" character varying NOT NULL, "employeesNumber" integer NOT NULL, CONSTRAINT "PK_600d6132b27680c1a78207fecd9" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TYPE "outputs_status_enum" AS ENUM('waiting', 'confirmed', 'cancelled', 'invalidated')`
    )
    await queryRunner.query(
      `CREATE TABLE "outputs" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "date" date NOT NULL, "status" "outputs_status_enum" NOT NULL DEFAULT 'waiting', CONSTRAINT "PK_37cbeca416a2d3f11d7c76e0961" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "aliment_outputs" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "quantity" integer NOT NULL, "alimentId" uuid, "outputId" uuid, "countTypeId" uuid, CONSTRAINT "REL_9cc91cdcaf5326872f04dbcaf9" UNIQUE ("countTypeId"), CONSTRAINT "PK_79bb2253a371b6ff9858ca860cd" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "price_collections" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "codAliment" character varying NOT NULL, "price" integer NOT NULL, "dataCollection" date NOT NULL, "alimentPriceId" uuid, CONSTRAINT "PK_6786400eb2808deae0bafbe82c4" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "unitType" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" character varying NOT NULL, CONSTRAINT "PK_4eb67370416f7f9622a2d45d617" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "aliments" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "description" character varying NOT NULL, "perishable" boolean NOT NULL, "storagePlace" character varying NOT NULL, "typeFood" character varying NOT NULL, CONSTRAINT "PK_0948a47e7235d05b7b6847629c9" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "aliment_baskets" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_90b6cc479025d77fbeaa491a421" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "cities" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "city" character varying NOT NULL, "state" integer, "uf" integer NOT NULL, "cep" character varying NOT NULL, "codMunicipality" character varying, "ibge" character varying, CONSTRAINT "PK_4762ffb6e5d198cfec5606bc11e" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "dependent_entities" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "sexo" character varying NOT NULL, "dateBirth" date NOT NULL, "codEntity" character varying NOT NULL, CONSTRAINT "PK_1f05c3abb30fbbc1c5102e66852" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "food_returns" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "returnCause" character varying NOT NULL, "date" character varying NOT NULL, CONSTRAINT "PK_03dbf471d62c7903d90707305e2" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "inventories" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "codAliment" character varying NOT NULL, "inventoryMin" integer NOT NULL, "inventoryMax" integer NOT NULL, "inventoryActual" integer NOT NULL, "lastInput" date NOT NULL, "lastOutput" date NOT NULL, CONSTRAINT "PK_7b1946392ffdcb50cfc6ac78c0e" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "operations" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "dayWeek" character varying NOT NULL, "horaryInit" integer NOT NULL, "horaryClose" integer NOT NULL, "enitity" character varying NOT NULL, CONSTRAINT "PK_7b62d84d6f9912b975987165856" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "aliments_unit_type_unit_type" ("alimentsId" uuid NOT NULL, "unitTypeId" uuid NOT NULL, CONSTRAINT "PK_a2b00fc9a02294afc51b18f9990" PRIMARY KEY ("alimentsId", "unitTypeId"))`
    )
    await queryRunner.query(
      `CREATE INDEX "IDX_531fe6f1a54c3a4c0380b507bc" ON "aliments_unit_type_unit_type" ("alimentsId") `
    )
    await queryRunner.query(
      `CREATE INDEX "IDX_3c0d3a5cbb83da3328967a3648" ON "aliments_unit_type_unit_type" ("unitTypeId") `
    )
    await queryRunner.query(
      `CREATE TABLE "aliment_baskets_aliments_aliments" ("alimentBasketsId" uuid NOT NULL, "alimentsId" uuid NOT NULL, CONSTRAINT "PK_a788ad463d58a40da25df9f1b89" PRIMARY KEY ("alimentBasketsId", "alimentsId"))`
    )
    await queryRunner.query(
      `CREATE INDEX "IDX_b5e751eca0d78eed50a30efa1b" ON "aliment_baskets_aliments_aliments" ("alimentBasketsId") `
    )
    await queryRunner.query(
      `CREATE INDEX "IDX_14584f5d3b3338c581b15837de" ON "aliment_baskets_aliments_aliments" ("alimentsId") `
    )
    await queryRunner.query(
      `CREATE TABLE "aliment_baskets_families_families" ("alimentBasketsId" uuid NOT NULL, "familiesId" uuid NOT NULL, CONSTRAINT "PK_ac9563792d4e221908279d0250b" PRIMARY KEY ("alimentBasketsId", "familiesId"))`
    )
    await queryRunner.query(
      `CREATE INDEX "IDX_50485fc3c137cc32da4940856b" ON "aliment_baskets_families_families" ("alimentBasketsId") `
    )
    await queryRunner.query(
      `CREATE INDEX "IDX_b2fefa824ca4914089c514b75d" ON "aliment_baskets_families_families" ("familiesId") `
    )
    await queryRunner.query(
      `ALTER TABLE "order" ADD CONSTRAINT "FK_fb14b0c8e03c425360227075730" FOREIGN KEY ("idFarmerId") REFERENCES "farmers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "order" ADD CONSTRAINT "FK_de6fa8b07fd7e0a8bf9edb5eb38" FOREIGN KEY ("createdById") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "aliment_order" ADD CONSTRAINT "FK_067ea7a57f7dbceb2b31a4e878b" FOREIGN KEY ("alimentId") REFERENCES "aliments"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "aliment_order" ADD CONSTRAINT "FK_a38f6344892d11e93eed2cb3962" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "aliment_received" ADD CONSTRAINT "FK_0ab7317a2e9508583ff573d95fe" FOREIGN KEY ("alimentId") REFERENCES "aliment_order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "aliment_received" ADD CONSTRAINT "FK_13668119abf9a2510cabb704f83" FOREIGN KEY ("userReceivedId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "donations" ADD CONSTRAINT "FK_66dc58ce0cc46be684fc9c0bdd1" FOREIGN KEY ("userReceivedId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "donations" ADD CONSTRAINT "FK_f59ca2852940f48cb26b9fc19b6" FOREIGN KEY ("idDonorId") REFERENCES "donors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "aliment_donations" ADD CONSTRAINT "FK_28d40cd41756bd109f8fcac8cf2" FOREIGN KEY ("donationId") REFERENCES "donations"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "aliment_donations" ADD CONSTRAINT "FK_03d9047a6c53111aafe84826dc9" FOREIGN KEY ("alimentoId") REFERENCES "aliments"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "aliment_output_devolutions" ADD CONSTRAINT "FK_e93b3a291d407f167a0bc30101b" FOREIGN KEY ("alimentOutputId") REFERENCES "aliment_outputs"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "aliment_output_devolutions" ADD CONSTRAINT "FK_5c30bc9080fc2c9c6523a8c06a8" FOREIGN KEY ("devolutionId") REFERENCES "devolutions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "dependent_families" ADD CONSTRAINT "FK_c470b837bdaa6ef556d3b17cdd3" FOREIGN KEY ("familyId") REFERENCES "families"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "families" ADD CONSTRAINT "FK_2b42eff9c111dec06b63b3a3f11" FOREIGN KEY ("transferEntityId") REFERENCES "transfer_entities"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "entity_employees" ADD CONSTRAINT "FK_8933821a24a481c1020cfb619b1" FOREIGN KEY ("beneficiaryEntityId") REFERENCES "beneficiary_entities"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "entity_employees" ADD CONSTRAINT "FK_abdb71ecf62b66cb8db13d3accd" FOREIGN KEY ("transferEntityId") REFERENCES "transfer_entities"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "aliment_outputs" ADD CONSTRAINT "FK_582d63cc26269fb2131a2d3e9c4" FOREIGN KEY ("alimentId") REFERENCES "aliments"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "aliment_outputs" ADD CONSTRAINT "FK_4def1560570c3fa889dbe05499c" FOREIGN KEY ("outputId") REFERENCES "outputs"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "aliment_outputs" ADD CONSTRAINT "FK_9cc91cdcaf5326872f04dbcaf94" FOREIGN KEY ("countTypeId") REFERENCES "count_types"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "price_collections" ADD CONSTRAINT "FK_5c2a12a7430a3c921ba093aadc5" FOREIGN KEY ("alimentPriceId") REFERENCES "aliments"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "aliments_unit_type_unit_type" ADD CONSTRAINT "FK_531fe6f1a54c3a4c0380b507bc2" FOREIGN KEY ("alimentsId") REFERENCES "aliments"("id") ON DELETE CASCADE ON UPDATE CASCADE`
    )
    await queryRunner.query(
      `ALTER TABLE "aliments_unit_type_unit_type" ADD CONSTRAINT "FK_3c0d3a5cbb83da3328967a36480" FOREIGN KEY ("unitTypeId") REFERENCES "unitType"("id") ON DELETE CASCADE ON UPDATE CASCADE`
    )
    await queryRunner.query(
      `ALTER TABLE "aliment_baskets_aliments_aliments" ADD CONSTRAINT "FK_b5e751eca0d78eed50a30efa1bc" FOREIGN KEY ("alimentBasketsId") REFERENCES "aliment_baskets"("id") ON DELETE CASCADE ON UPDATE CASCADE`
    )
    await queryRunner.query(
      `ALTER TABLE "aliment_baskets_aliments_aliments" ADD CONSTRAINT "FK_14584f5d3b3338c581b15837de4" FOREIGN KEY ("alimentsId") REFERENCES "aliments"("id") ON DELETE CASCADE ON UPDATE CASCADE`
    )
    await queryRunner.query(
      `ALTER TABLE "aliment_baskets_families_families" ADD CONSTRAINT "FK_50485fc3c137cc32da4940856b3" FOREIGN KEY ("alimentBasketsId") REFERENCES "aliment_baskets"("id") ON DELETE CASCADE ON UPDATE CASCADE`
    )
    await queryRunner.query(
      `ALTER TABLE "aliment_baskets_families_families" ADD CONSTRAINT "FK_b2fefa824ca4914089c514b75dc" FOREIGN KEY ("familiesId") REFERENCES "families"("id") ON DELETE CASCADE ON UPDATE CASCADE`
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "aliment_baskets_families_families" DROP CONSTRAINT "FK_b2fefa824ca4914089c514b75dc"`
    )
    await queryRunner.query(
      `ALTER TABLE "aliment_baskets_families_families" DROP CONSTRAINT "FK_50485fc3c137cc32da4940856b3"`
    )
    await queryRunner.query(
      `ALTER TABLE "aliment_baskets_aliments_aliments" DROP CONSTRAINT "FK_14584f5d3b3338c581b15837de4"`
    )
    await queryRunner.query(
      `ALTER TABLE "aliment_baskets_aliments_aliments" DROP CONSTRAINT "FK_b5e751eca0d78eed50a30efa1bc"`
    )
    await queryRunner.query(
      `ALTER TABLE "aliments_unit_type_unit_type" DROP CONSTRAINT "FK_3c0d3a5cbb83da3328967a36480"`
    )
    await queryRunner.query(
      `ALTER TABLE "aliments_unit_type_unit_type" DROP CONSTRAINT "FK_531fe6f1a54c3a4c0380b507bc2"`
    )
    await queryRunner.query(
      `ALTER TABLE "price_collections" DROP CONSTRAINT "FK_5c2a12a7430a3c921ba093aadc5"`
    )
    await queryRunner.query(
      `ALTER TABLE "aliment_outputs" DROP CONSTRAINT "FK_9cc91cdcaf5326872f04dbcaf94"`
    )
    await queryRunner.query(
      `ALTER TABLE "aliment_outputs" DROP CONSTRAINT "FK_4def1560570c3fa889dbe05499c"`
    )
    await queryRunner.query(
      `ALTER TABLE "aliment_outputs" DROP CONSTRAINT "FK_582d63cc26269fb2131a2d3e9c4"`
    )
    await queryRunner.query(
      `ALTER TABLE "entity_employees" DROP CONSTRAINT "FK_abdb71ecf62b66cb8db13d3accd"`
    )
    await queryRunner.query(
      `ALTER TABLE "entity_employees" DROP CONSTRAINT "FK_8933821a24a481c1020cfb619b1"`
    )
    await queryRunner.query(
      `ALTER TABLE "families" DROP CONSTRAINT "FK_2b42eff9c111dec06b63b3a3f11"`
    )
    await queryRunner.query(
      `ALTER TABLE "dependent_families" DROP CONSTRAINT "FK_c470b837bdaa6ef556d3b17cdd3"`
    )
    await queryRunner.query(
      `ALTER TABLE "aliment_output_devolutions" DROP CONSTRAINT "FK_5c30bc9080fc2c9c6523a8c06a8"`
    )
    await queryRunner.query(
      `ALTER TABLE "aliment_output_devolutions" DROP CONSTRAINT "FK_e93b3a291d407f167a0bc30101b"`
    )
    await queryRunner.query(
      `ALTER TABLE "aliment_donations" DROP CONSTRAINT "FK_03d9047a6c53111aafe84826dc9"`
    )
    await queryRunner.query(
      `ALTER TABLE "aliment_donations" DROP CONSTRAINT "FK_28d40cd41756bd109f8fcac8cf2"`
    )
    await queryRunner.query(
      `ALTER TABLE "donations" DROP CONSTRAINT "FK_f59ca2852940f48cb26b9fc19b6"`
    )
    await queryRunner.query(
      `ALTER TABLE "donations" DROP CONSTRAINT "FK_66dc58ce0cc46be684fc9c0bdd1"`
    )
    await queryRunner.query(
      `ALTER TABLE "aliment_received" DROP CONSTRAINT "FK_13668119abf9a2510cabb704f83"`
    )
    await queryRunner.query(
      `ALTER TABLE "aliment_received" DROP CONSTRAINT "FK_0ab7317a2e9508583ff573d95fe"`
    )
    await queryRunner.query(
      `ALTER TABLE "aliment_order" DROP CONSTRAINT "FK_a38f6344892d11e93eed2cb3962"`
    )
    await queryRunner.query(
      `ALTER TABLE "aliment_order" DROP CONSTRAINT "FK_067ea7a57f7dbceb2b31a4e878b"`
    )
    await queryRunner.query(
      `ALTER TABLE "order" DROP CONSTRAINT "FK_de6fa8b07fd7e0a8bf9edb5eb38"`
    )
    await queryRunner.query(
      `ALTER TABLE "order" DROP CONSTRAINT "FK_fb14b0c8e03c425360227075730"`
    )
    await queryRunner.query(`DROP INDEX "IDX_b2fefa824ca4914089c514b75d"`)
    await queryRunner.query(`DROP INDEX "IDX_50485fc3c137cc32da4940856b"`)
    await queryRunner.query(`DROP TABLE "aliment_baskets_families_families"`)
    await queryRunner.query(`DROP INDEX "IDX_14584f5d3b3338c581b15837de"`)
    await queryRunner.query(`DROP INDEX "IDX_b5e751eca0d78eed50a30efa1b"`)
    await queryRunner.query(`DROP TABLE "aliment_baskets_aliments_aliments"`)
    await queryRunner.query(`DROP INDEX "IDX_3c0d3a5cbb83da3328967a3648"`)
    await queryRunner.query(`DROP INDEX "IDX_531fe6f1a54c3a4c0380b507bc"`)
    await queryRunner.query(`DROP TABLE "aliments_unit_type_unit_type"`)
    await queryRunner.query(`DROP TABLE "operations"`)
    await queryRunner.query(`DROP TABLE "inventories"`)
    await queryRunner.query(`DROP TABLE "food_returns"`)
    await queryRunner.query(`DROP TABLE "dependent_entities"`)
    await queryRunner.query(`DROP TABLE "cities"`)
    await queryRunner.query(`DROP TABLE "aliment_baskets"`)
    await queryRunner.query(`DROP TABLE "aliments"`)
    await queryRunner.query(`DROP TABLE "unitType"`)
    await queryRunner.query(`DROP TABLE "price_collections"`)
    await queryRunner.query(`DROP TABLE "aliment_outputs"`)
    await queryRunner.query(`DROP TABLE "outputs"`)
    await queryRunner.query(`DROP TYPE "outputs_status_enum"`)
    await queryRunner.query(`DROP TABLE "beneficiary_entities"`)
    await queryRunner.query(`DROP TABLE "entity_employees"`)
    await queryRunner.query(`DROP TABLE "transfer_entities"`)
    await queryRunner.query(`DROP TABLE "families"`)
    await queryRunner.query(`DROP TABLE "dependent_families"`)
    await queryRunner.query(`DROP TABLE "count_types"`)
    await queryRunner.query(`DROP TABLE "aliment_output_devolutions"`)
    await queryRunner.query(`DROP TABLE "devolutions"`)
    await queryRunner.query(`DROP TABLE "aliment_donations"`)
    await queryRunner.query(`DROP TABLE "donations"`)
    await queryRunner.query(`DROP TABLE "users"`)
    await queryRunner.query(`DROP TABLE "aliment_received"`)
    await queryRunner.query(`DROP TABLE "aliment_order"`)
    await queryRunner.query(`DROP TABLE "order"`)
    await queryRunner.query(`DROP TABLE "farmers"`)
    await queryRunner.query(`DROP TABLE "donors"`)
  }
}
