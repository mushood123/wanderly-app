import * as auth from './auth';
import * as database from './database';
import * as storage from './storage';

export const firebase = {
    ...auth,
    ...database,
    ...storage
};
