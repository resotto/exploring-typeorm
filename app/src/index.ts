import { createConnection } from 'typeorm';
import { ADbModel } from './entities/a.entity';

createConnection().then(async (conn) => {
  const aDbModel = await conn
    .getRepository(ADbModel)
    .createQueryBuilder('a')
    .leftJoinAndSelect('a.b', 'b')
    .where('a.a_id = :id', { id: 1 })
    // .printSql();
    // .getRawOne();
    .getOne();
  console.debug(aDbModel);
});
