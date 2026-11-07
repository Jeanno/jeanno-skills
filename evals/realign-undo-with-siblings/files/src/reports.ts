import { fetchUser } from './users';

export const reportAuthor = (id: string) => fetchUser(id);
