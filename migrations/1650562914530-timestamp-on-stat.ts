import {MigrationInterface, QueryRunner} from "typeorm";

export class timestampOnStat1650562914530 implements MigrationInterface {
    name = 'timestampOnStat1650562914530'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "posts" ALTER COLUMN "created_at" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "date_posts_with_ips" ALTER COLUMN "lastView" SET DEFAULT '"2022-04-21T17:41:55.879Z"'`);
        await queryRunner.query(`ALTER TABLE "stats" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "stats" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "stats" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "stats" ADD "created_at" character varying NOT NULL DEFAULT '2022-04-20T19:38:05.881Z'`);
        await queryRunner.query(`ALTER TABLE "date_posts_with_ips" ALTER COLUMN "lastView" SET DEFAULT '2022-04-20 19:38:05.753+00'`);
        await queryRunner.query(`ALTER TABLE "posts" ALTER COLUMN "created_at" SET DEFAULT '2022-04-20 19:38:05.733'`);
    }

}
