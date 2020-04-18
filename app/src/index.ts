import { createConnection } from 'typeorm';
import { ADbModel } from './entities/a.entity';

createConnection().then(async (conn) => {
  const aDbModel = await conn
    .getRepository(ADbModel)
    .createQueryBuilder('a')
    .leftJoinAndSelect('b', 'b', 'b.id = a.id')
    .where('a.id = :id', { id: 1 })
    // .getSql();
    .getRawOne();
  // .getOne();
  console.debug(aDbModel);
});
