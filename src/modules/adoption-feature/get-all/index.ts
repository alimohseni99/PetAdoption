import { Db } from "../types";

export const getAll = (db: Db) => async () =>{
 db.getAll();
};