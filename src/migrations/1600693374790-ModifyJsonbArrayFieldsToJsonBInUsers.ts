import {MigrationInterface, QueryRunner} from "typeorm";

export class ModifyJsonbArrayFieldsToJsonBInUsers1600693374790 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER table users add recent_viewed1 jsonb default '{}'::jsonb");
        await queryRunner.query("update users set recent_viewed1 = to_jsonb(recent_viewed)");
        await queryRunner.query("ALTER table users drop column recent_viewed");
        await queryRunner.query("ALTER table users rename recent_viewed1 to recent_viewed");

        await queryRunner.query("ALTER table users add products_saved_for_later1 jsonb default '{}'::jsonb");
        await queryRunner.query("update users set products_saved_for_later1 = to_jsonb(products_saved_for_later)");
        await queryRunner.query("ALTER table users drop column products_saved_for_later");
        await queryRunner.query("ALTER table users rename products_saved_for_later1 to products_saved_for_later");

        await queryRunner.query("ALTER table users add favourites1 jsonb default '{}'::jsonb");
        await queryRunner.query("update users set favourites1 = to_jsonb(favourites)");
        await queryRunner.query("ALTER table users drop column favourites");
        await queryRunner.query("ALTER table users rename favourites1 to favourites");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER table users add recent_viewed1 jsonb[] default ARRAY[]::jsonb[]");
        await queryRunner.query("UPDATE users set recent_viewed1 = ARRAY[recent_viewed]");
        await queryRunner.query("ALTER table users drop column recent_viewed");
        await queryRunner.query("ALTER table users rename recent_viewed1 to recent_viewed");

        await queryRunner.query("ALTER table users add products_saved_for_later1 jsonb[] default ARRAY[]::jsonb[]");
        await queryRunner.query("update users set products_saved_for_later1 = ARRAY[products_saved_for_later]");
        await queryRunner.query("ALTER table users drop column products_saved_for_later");
        await queryRunner.query("ALTER table users rename products_saved_for_later1 to products_saved_for_later");

        await queryRunner.query("ALTER table users add favourites1 jsonb[] default ARRAY[]::jsonb[]");
        await queryRunner.query("update users set favourites1 = ARRAY[favourites]");
        await queryRunner.query("ALTER table users drop column favourites");
        await queryRunner.query("ALTER table users rename favourites1 to favourites");
    }

}
