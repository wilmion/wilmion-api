import {MigrationInterface, QueryRunner} from "typeorm";

export class ChanginTheGame1646415756214 implements MigrationInterface {
    name = 'ChanginTheGame1646415756214'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "jobs" DROP CONSTRAINT "FK_f09e390b9dad6e9e8ccb6fe0b41"`);
        await queryRunner.query(`ALTER TABLE "jobs" ALTER COLUMN "imageId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "jobs" DROP CONSTRAINT "REL_f09e390b9dad6e9e8ccb6fe0b4"`);
        await queryRunner.query(`ALTER TABLE "projects" DROP CONSTRAINT "FK_ef3ae594e51fcc648bb8656463d"`);
        await queryRunner.query(`ALTER TABLE "projects" ALTER COLUMN "imageId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "projects" DROP CONSTRAINT "REL_ef3ae594e51fcc648bb8656463"`);
        await queryRunner.query(`ALTER TABLE "skills" DROP CONSTRAINT "FK_94f0be16201955b9425c101bac0"`);
        await queryRunner.query(`ALTER TABLE "skills" DROP CONSTRAINT "REL_94f0be16201955b9425c101bac"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_0b9cf86bd47b4393165e9bddf3c"`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "imageId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "REL_0b9cf86bd47b4393165e9bddf3"`);
        await queryRunner.query(`ALTER TABLE "posts" DROP CONSTRAINT "FK_ae05faaa55c866130abef6e1fee"`);
        await queryRunner.query(`ALTER TABLE "posts" ALTER COLUMN "created_at" SET DEFAULT '"2022-03-04T17:42:38.473Z"'`);
        await queryRunner.query(`ALTER TABLE "posts" ALTER COLUMN "userId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contents" DROP CONSTRAINT "FK_87d8d31fca31154c493fb65a735"`);
        await queryRunner.query(`ALTER TABLE "contents" ALTER COLUMN "imageId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contents" DROP CONSTRAINT "REL_87d8d31fca31154c493fb65a73"`);
        await queryRunner.query(`ALTER TABLE "date_posts_with_ips" DROP CONSTRAINT "FK_7d2e22faba5574ba7cac4955227"`);
        await queryRunner.query(`ALTER TABLE "date_posts_with_ips" DROP CONSTRAINT "FK_f6f782faba5879eef5d1febefe4"`);
        await queryRunner.query(`ALTER TABLE "date_posts_with_ips" ALTER COLUMN "lastView" SET DEFAULT '"2022-03-04T17:42:38.491Z"'`);
        await queryRunner.query(`ALTER TABLE "date_posts_with_ips" ALTER COLUMN "postId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "date_posts_with_ips" ALTER COLUMN "ipId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "stats" ALTER COLUMN "created_at" SET DEFAULT '"2022-03-04T17:42:38.615Z"'`);
        await queryRunner.query(`ALTER TABLE "jobs" ADD CONSTRAINT "FK_f09e390b9dad6e9e8ccb6fe0b41" FOREIGN KEY ("imageId") REFERENCES "images"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "projects" ADD CONSTRAINT "FK_ef3ae594e51fcc648bb8656463d" FOREIGN KEY ("imageId") REFERENCES "images"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "skills" ADD CONSTRAINT "FK_94f0be16201955b9425c101bac0" FOREIGN KEY ("imageId") REFERENCES "images"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_0b9cf86bd47b4393165e9bddf3c" FOREIGN KEY ("imageId") REFERENCES "images"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "posts" ADD CONSTRAINT "FK_ae05faaa55c866130abef6e1fee" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "contents" ADD CONSTRAINT "FK_87d8d31fca31154c493fb65a735" FOREIGN KEY ("imageId") REFERENCES "images"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "date_posts_with_ips" ADD CONSTRAINT "FK_7d2e22faba5574ba7cac4955227" FOREIGN KEY ("postId") REFERENCES "posts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "date_posts_with_ips" ADD CONSTRAINT "FK_f6f782faba5879eef5d1febefe4" FOREIGN KEY ("ipId") REFERENCES "ips_user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "date_posts_with_ips" DROP CONSTRAINT "FK_f6f782faba5879eef5d1febefe4"`);
        await queryRunner.query(`ALTER TABLE "date_posts_with_ips" DROP CONSTRAINT "FK_7d2e22faba5574ba7cac4955227"`);
        await queryRunner.query(`ALTER TABLE "contents" DROP CONSTRAINT "FK_87d8d31fca31154c493fb65a735"`);
        await queryRunner.query(`ALTER TABLE "posts" DROP CONSTRAINT "FK_ae05faaa55c866130abef6e1fee"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_0b9cf86bd47b4393165e9bddf3c"`);
        await queryRunner.query(`ALTER TABLE "skills" DROP CONSTRAINT "FK_94f0be16201955b9425c101bac0"`);
        await queryRunner.query(`ALTER TABLE "projects" DROP CONSTRAINT "FK_ef3ae594e51fcc648bb8656463d"`);
        await queryRunner.query(`ALTER TABLE "jobs" DROP CONSTRAINT "FK_f09e390b9dad6e9e8ccb6fe0b41"`);
        await queryRunner.query(`ALTER TABLE "stats" ALTER COLUMN "created_at" SET DEFAULT '2022-03-02 21:22:33.281'`);
        await queryRunner.query(`ALTER TABLE "date_posts_with_ips" ALTER COLUMN "ipId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "date_posts_with_ips" ALTER COLUMN "postId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "date_posts_with_ips" ALTER COLUMN "lastView" SET DEFAULT '2022-03-02 21:22:33.267+00'`);
        await queryRunner.query(`ALTER TABLE "date_posts_with_ips" ADD CONSTRAINT "FK_f6f782faba5879eef5d1febefe4" FOREIGN KEY ("ipId") REFERENCES "ips_user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "date_posts_with_ips" ADD CONSTRAINT "FK_7d2e22faba5574ba7cac4955227" FOREIGN KEY ("postId") REFERENCES "posts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "contents" ADD CONSTRAINT "REL_87d8d31fca31154c493fb65a73" UNIQUE ("imageId")`);
        await queryRunner.query(`ALTER TABLE "contents" ALTER COLUMN "imageId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contents" ADD CONSTRAINT "FK_87d8d31fca31154c493fb65a735" FOREIGN KEY ("imageId") REFERENCES "images"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "posts" ALTER COLUMN "userId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "posts" ALTER COLUMN "created_at" SET DEFAULT '2022-03-02 21:22:33.281'`);
        await queryRunner.query(`ALTER TABLE "posts" ADD CONSTRAINT "FK_ae05faaa55c866130abef6e1fee" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "REL_0b9cf86bd47b4393165e9bddf3" UNIQUE ("imageId")`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "imageId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_0b9cf86bd47b4393165e9bddf3c" FOREIGN KEY ("imageId") REFERENCES "images"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "skills" ADD CONSTRAINT "REL_94f0be16201955b9425c101bac" UNIQUE ("imageId")`);
        await queryRunner.query(`ALTER TABLE "skills" ADD CONSTRAINT "FK_94f0be16201955b9425c101bac0" FOREIGN KEY ("imageId") REFERENCES "images"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "projects" ADD CONSTRAINT "REL_ef3ae594e51fcc648bb8656463" UNIQUE ("imageId")`);
        await queryRunner.query(`ALTER TABLE "projects" ALTER COLUMN "imageId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "projects" ADD CONSTRAINT "FK_ef3ae594e51fcc648bb8656463d" FOREIGN KEY ("imageId") REFERENCES "images"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "jobs" ADD CONSTRAINT "REL_f09e390b9dad6e9e8ccb6fe0b4" UNIQUE ("imageId")`);
        await queryRunner.query(`ALTER TABLE "jobs" ALTER COLUMN "imageId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "jobs" ADD CONSTRAINT "FK_f09e390b9dad6e9e8ccb6fe0b41" FOREIGN KEY ("imageId") REFERENCES "images"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
