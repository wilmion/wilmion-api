import {MigrationInterface, QueryRunner} from "typeorm";

export class AddingPrecision1651088366394 implements MigrationInterface {
    name = 'AddingPrecision1651088366394'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "date_posts_with_ips" ALTER COLUMN "lastView" SET DEFAULT '"2022-04-27T19:39:27.665Z"'`);
        await queryRunner.query(`ALTER TABLE "stats" ALTER COLUMN "created_at" TYPE TIMESTAMP(3)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "stats" ALTER COLUMN "created_at" TYPE TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE "date_posts_with_ips" ALTER COLUMN "lastView" SET DEFAULT '2022-04-21 17:41:55.879+00'`);
    }

}
