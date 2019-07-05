import { ORM, /*fk, many,*/ } from 'redux-orm';


export const orm = new ORM();
orm.register();

export default orm;

