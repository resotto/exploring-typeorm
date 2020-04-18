import { MigrationInterface, QueryRunner } from 'typeorm';

export class addTables1587195375937 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    queryRunner.query(
      'create table fruit (id integer primary key, name text);'
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    queryRunner.query('drop table fruit');
  }
}
