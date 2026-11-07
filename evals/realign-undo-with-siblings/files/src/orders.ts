import { fetchUser } from './users';

export const orderOwner = (id: string) => fetchUser(id);
