import {MigrationInterface, QueryRunner} from "typeorm";

export class FixTimestamp1650483484343 implements MigrationInterface {
    name = 'FixTimestamp1650483484343'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "posts" ALTER COLUMN "created_at" SET DEFAULT '"2022-04-20T19:38:05.733Z"'`);
        await queryRunner.query(`ALTER TABLE "date_posts_with_ips" ALTER COLUMN "lastView" SET DEFAULT '"2022-04-20T19:38:05.753Z"'`);
        await queryRunner.query(`ALTER TABLE "stats" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "stats" ADD "created_at" character varying NOT NULL DEFAULT '2022-04-20T19:38:05.881Z'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "stats" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "stats" ADD "created_at" TIMESTAMP NOT NULL DEFAULT '2022-03-29 20:15:37.568'`);
        await queryRunner.query(`ALTER TABLE "date_posts_with_ips" ALTER COLUMN "lastView" SET DEFAULT '2022-03-29 20:15:37.446+00'`);
        await queryRunner.query(`ALTER TABLE "posts" ALTER COLUMN "created_at" SET DEFAULT '2022-03-29 20:15:37.426'`);
    }

}
