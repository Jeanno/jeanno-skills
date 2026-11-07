import { fetchUser } from './users';

export const adminLookup = (id: string) => fetchUser(id);
