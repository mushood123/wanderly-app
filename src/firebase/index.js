import * as auth from './auth';
import * as database from './database';

export const firebase = {
  ...auth,
  ...database,
};
