import {MigrationInterface, QueryRunner} from "typeorm";

export class first1646256149935 implements MigrationInterface {
    name = 'first1646256149935'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "images" ("id" SERIAL NOT NULL, "image_url" character varying NOT NULL, "size" character varying NOT NULL, "resolution" character varying NOT NULL, "md5" character varying NOT NULL, CONSTRAINT "UQ_7f4106e8cdda3ccd048b9c657b9" UNIQUE ("md5"), CONSTRAINT "PK_1fe148074c6a1a91b63cb9ee3c9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "username" character varying NOT NULL, "password" character varying NOT NULL, "name" character varying NOT NULL, "job" character varying NOT NULL DEFAULT 'NOT-DEFINED', "active" boolean NOT NULL DEFAULT true, "email" character varying NOT NULL, "imageId" integer NOT NULL, CONSTRAINT "UQ_fe0bb3f6520ee0469504521e710" UNIQUE ("username"), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "REL_0b9cf86bd47b4393165e9bddf3" UNIQUE ("imageId"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tags" ("id" SERIAL NOT NULL, "color" character varying NOT NULL, "text" character varying NOT NULL, "active" boolean NOT NULL DEFAULT true, CONSTRAINT "UQ_9322ab4669053a42f2980c3f663" UNIQUE ("text"), CONSTRAINT "PK_e7dc17249a1148a1970748eda99" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "ips_user" ("id" SERIAL NOT NULL, "ip" character varying NOT NULL, CONSTRAINT "UQ_fc1f0855bbd572313d090495eb1" UNIQUE ("ip"), CONSTRAINT "PK_298ce1595f8af3e20d2e2efcaa8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "date_posts_with_ips" ("id" SERIAL NOT NULL, "lastView" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT '"2022-03-02T21:22:33.267Z"', "quantityViews" integer NOT NULL DEFAULT '0', "likedPost" boolean NOT NULL DEFAULT false, "postId" integer NOT NULL, "ipId" integer NOT NULL, CONSTRAINT "PK_185ff2425b3b3c25d1f3bc5f6e9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."stats_type_enum" AS ENUM('NU', 'VTTBP', 'VTTPP', 'VTTCP', 'NOCWSTF')`);
        await queryRunner.query(`CREATE TABLE "stats" ("id" SERIAL NOT NULL, "type" "public"."stats_type_enum" NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT '"2022-03-02T21:22:33.281Z"', "postId" integer, CONSTRAINT "PK_c76e93dfef28ba9b6942f578ab1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "posts" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT '"2022-03-02T21:22:33.281Z"', "time_read" double precision NOT NULL, "active" boolean NOT NULL DEFAULT true, "userId" integer NOT NULL, CONSTRAINT "PK_2829ac61eff60fcec60d7274b9e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."contents_type_enum" AS ENUM('SUBTITLE', 'PARAGRAPH', 'LIST-FOR-POINT', 'LIST-FOR-NUMBERS', 'CODE', 'IMAGE')`);
        await queryRunner.query(`CREATE TABLE "contents" ("id" SERIAL NOT NULL, "type" "public"."contents_type_enum" NOT NULL, "order_number" integer NOT NULL, "content" character varying NOT NULL, "imageId" integer NOT NULL, "postId" integer, CONSTRAINT "REL_87d8d31fca31154c493fb65a73" UNIQUE ("imageId"), CONSTRAINT "PK_b7c504072e537532d7080c54fac" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "jobs" ("id" SERIAL NOT NULL, "name_businness" character varying NOT NULL, "color" character varying NOT NULL, "description" character varying NOT NULL, "active" boolean NOT NULL, "role" character varying NOT NULL, "from" TIMESTAMP NOT NULL, "to" character varying NOT NULL, "function_1" character varying, "function_2" character varying, "function_3" character varying, "function_4" character varying, "imageId" integer NOT NULL, CONSTRAINT "REL_f09e390b9dad6e9e8ccb6fe0b4" UNIQUE ("imageId"), CONSTRAINT "PK_cf0a6c42b72fcc7f7c237def345" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "skills" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "background_color" character varying NOT NULL, "icon_color" character varying NOT NULL, "active" boolean NOT NULL DEFAULT true, "icon" character varying, "imageId" integer, CONSTRAINT "UQ_81f05095507fd84aa2769b4a522" UNIQUE ("name"), CONSTRAINT "REL_94f0be16201955b9425c101bac" UNIQUE ("imageId"), CONSTRAINT "PK_0d3212120f4ecedf90864d7e298" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "projects" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "link_frontend" character varying NOT NULL, "link_backend" character varying, "link_blog" character varying, "link_figma" character varying, "link_repository" character varying NOT NULL, "active" boolean NOT NULL DEFAULT true, "imageId" integer NOT NULL, CONSTRAINT "REL_ef3ae594e51fcc648bb8656463" UNIQUE ("imageId"), CONSTRAINT "PK_6271df0a7aed1d6c0691ce6ac50" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "social-media" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "icon" character varying NOT NULL, "color" character varying NOT NULL, "active" boolean NOT NULL DEFAULT true, "redirect_url" character varying NOT NULL, CONSTRAINT "UQ_94cbd10d25c8fc4de6021a85497" UNIQUE ("name"), CONSTRAINT "PK_a56c5ed67b4c41159e29552466c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "static-contents" ("id" SERIAL NOT NULL, "introduction" character varying NOT NULL, "response_question" character varying NOT NULL, "contact_email" character varying NOT NULL, CONSTRAINT "PK_0f0957bab7517602402f73d1a09" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "CONNECTION_TAGS_TO_POSTS" ("postsId" integer NOT NULL, "tagsId" integer NOT NULL, CONSTRAINT "PK_3ce31f49596a97330e8a0396814" PRIMARY KEY ("postsId", "tagsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_6e59cc5b80a31abbdc30d1a7f3" ON "CONNECTION_TAGS_TO_POSTS" ("postsId") `);
        await queryRunner.query(`CREATE INDEX "IDX_a46d0be626355b007ba0e5d58c" ON "CONNECTION_TAGS_TO_POSTS" ("tagsId") `);
        await queryRunner.query(`CREATE TABLE "CONNECTION_PROJECTS_TO_KILLS" ("projectsId" integer NOT NULL, "skillsId" integer NOT NULL, CONSTRAINT "PK_730a98ecae7d3d8fefd2bc6ea4c" PRIMARY KEY ("projectsId", "skillsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_29201ef592acd6a51c18814dd4" ON "CONNECTION_PROJECTS_TO_KILLS" ("projectsId") `);
        await queryRunner.query(`CREATE INDEX "IDX_bf456b855eb8b8fa20576c8249" ON "CONNECTION_PROJECTS_TO_KILLS" ("skillsId") `);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_0b9cf86bd47b4393165e9bddf3c" FOREIGN KEY ("imageId") REFERENCES "images"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "date_posts_with_ips" ADD CONSTRAINT "FK_7d2e22faba5574ba7cac4955227" FOREIGN KEY ("postId") REFERENCES "posts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "date_posts_with_ips" ADD CONSTRAINT "FK_f6f782faba5879eef5d1febefe4" FOREIGN KEY ("ipId") REFERENCES "ips_user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "stats" ADD CONSTRAINT "FK_ead090d45777493fbb7774a097b" FOREIGN KEY ("postId") REFERENCES "posts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "posts" ADD CONSTRAINT "FK_ae05faaa55c866130abef6e1fee" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "contents" ADD CONSTRAINT "FK_87d8d31fca31154c493fb65a735" FOREIGN KEY ("imageId") REFERENCES "images"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "contents" ADD CONSTRAINT "FK_ec0baea1d0a16a61c71c1c8b0c8" FOREIGN KEY ("postId") REFERENCES "posts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "jobs" ADD CONSTRAINT "FK_f09e390b9dad6e9e8ccb6fe0b41" FOREIGN KEY ("imageId") REFERENCES "images"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "skills" ADD CONSTRAINT "FK_94f0be16201955b9425c101bac0" FOREIGN KEY ("imageId") REFERENCES "images"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "projects" ADD CONSTRAINT "FK_ef3ae594e51fcc648bb8656463d" FOREIGN KEY ("imageId") REFERENCES "images"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "CONNECTION_TAGS_TO_POSTS" ADD CONSTRAINT "FK_6e59cc5b80a31abbdc30d1a7f31" FOREIGN KEY ("postsId") REFERENCES "posts"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "CONNECTION_TAGS_TO_POSTS" ADD CONSTRAINT "FK_a46d0be626355b007ba0e5d58c0" FOREIGN KEY ("tagsId") REFERENCES "tags"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "CONNECTION_PROJECTS_TO_KILLS" ADD CONSTRAINT "FK_29201ef592acd6a51c18814dd4d" FOREIGN KEY ("projectsId") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "CONNECTION_PROJECTS_TO_KILLS" ADD CONSTRAINT "FK_bf456b855eb8b8fa20576c8249c" FOREIGN KEY ("skillsId") REFERENCES "skills"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "CONNECTION_PROJECTS_TO_KILLS" DROP CONSTRAINT "FK_bf456b855eb8b8fa20576c8249c"`);
        await queryRunner.query(`ALTER TABLE "CONNECTION_PROJECTS_TO_KILLS" DROP CONSTRAINT "FK_29201ef592acd6a51c18814dd4d"`);
        await queryRunner.query(`ALTER TABLE "CONNECTION_TAGS_TO_POSTS" DROP CONSTRAINT "FK_a46d0be626355b007ba0e5d58c0"`);
        await queryRunner.query(`ALTER TABLE "CONNECTION_TAGS_TO_POSTS" DROP CONSTRAINT "FK_6e59cc5b80a31abbdc30d1a7f31"`);
        await queryRunner.query(`ALTER TABLE "projects" DROP CONSTRAINT "FK_ef3ae594e51fcc648bb8656463d"`);
        await queryRunner.query(`ALTER TABLE "skills" DROP CONSTRAINT "FK_94f0be16201955b9425c101bac0"`);
        await queryRunner.query(`ALTER TABLE "jobs" DROP CONSTRAINT "FK_f09e390b9dad6e9e8ccb6fe0b41"`);
        await queryRunner.query(`ALTER TABLE "contents" DROP CONSTRAINT "FK_ec0baea1d0a16a61c71c1c8b0c8"`);
        await queryRunner.query(`ALTER TABLE "contents" DROP CONSTRAINT "FK_87d8d31fca31154c493fb65a735"`);
        await queryRunner.query(`ALTER TABLE "posts" DROP CONSTRAINT "FK_ae05faaa55c866130abef6e1fee"`);
        await queryRunner.query(`ALTER TABLE "stats" DROP CONSTRAINT "FK_ead090d45777493fbb7774a097b"`);
        await queryRunner.query(`ALTER TABLE "date_posts_with_ips" DROP CONSTRAINT "FK_f6f782faba5879eef5d1febefe4"`);
        await queryRunner.query(`ALTER TABLE "date_posts_with_ips" DROP CONSTRAINT "FK_7d2e22faba5574ba7cac4955227"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_0b9cf86bd47b4393165e9bddf3c"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_bf456b855eb8b8fa20576c8249"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_29201ef592acd6a51c18814dd4"`);
        await queryRunner.query(`DROP TABLE "CONNECTION_PROJECTS_TO_KILLS"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a46d0be626355b007ba0e5d58c"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_6e59cc5b80a31abbdc30d1a7f3"`);
        await queryRunner.query(`DROP TABLE "CONNECTION_TAGS_TO_POSTS"`);
        await queryRunner.query(`DROP TABLE "static-contents"`);
        await queryRunner.query(`DROP TABLE "social-media"`);
        await queryRunner.query(`DROP TABLE "projects"`);
        await queryRunner.query(`DROP TABLE "skills"`);
        await queryRunner.query(`DROP TABLE "jobs"`);
        await queryRunner.query(`DROP TABLE "contents"`);
        await queryRunner.query(`DROP TYPE "public"."contents_type_enum"`);
        await queryRunner.query(`DROP TABLE "posts"`);
        await queryRunner.query(`DROP TABLE "stats"`);
        await queryRunner.query(`DROP TYPE "public"."stats_type_enum"`);
        await queryRunner.query(`DROP TABLE "date_posts_with_ips"`);
        await queryRunner.query(`DROP TABLE "ips_user"`);
        await queryRunner.query(`DROP TABLE "tags"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "images"`);
    }

}
