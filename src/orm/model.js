import { ORM, /*fk, many,*/ attr, Model } from 'redux-orm';


export const orm = new ORM();
orm.register();

export default orm;

