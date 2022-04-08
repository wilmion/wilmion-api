import {MigrationInterface, QueryRunner} from "typeorm";

export class fixDates1648584936047 implements MigrationInterface {
    name = 'fixDates1648584936047'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "jobs" DROP COLUMN "from"`);
        await queryRunner.query(`ALTER TABLE "jobs" ADD "from" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "posts" ALTER COLUMN "created_at" SET DEFAULT '"2022-03-29T20:15:37.426Z"'`);
        await queryRunner.query(`ALTER TABLE "date_posts_with_ips" ALTER COLUMN "lastView" SET DEFAULT '"2022-03-29T20:15:37.446Z"'`);
        await queryRunner.query(`ALTER TABLE "stats" ALTER COLUMN "created_at" SET DEFAULT '"2022-03-29T20:15:37.568Z"'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "stats" ALTER COLUMN "created_at" SET DEFAULT '2022-03-04 17:42:38.615'`);
        await queryRunner.query(`ALTER TABLE "date_posts_with_ips" ALTER COLUMN "lastView" SET DEFAULT '2022-03-04 17:42:38.491+00'`);
        await queryRunner.query(`ALTER TABLE "posts" ALTER COLUMN "created_at" SET DEFAULT '2022-03-04 17:42:38.473'`);
        await queryRunner.query(`ALTER TABLE "jobs" DROP COLUMN "from"`);
        await queryRunner.query(`ALTER TABLE "jobs" ADD "from" TIMESTAMP NOT NULL`);
    }

}
