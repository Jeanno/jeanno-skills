const cache = new Map<string, { user: User; expires: number }>();
const TTL_MS = 60_000;

export async function getUser(id: string): Promise<User> {
  const hit = cache.get(id);
  if (hit && hit.expires > Date.now()) return hit.user;
  const user = await db.users.find(id);
  cache.set(id, { user, expires: Date.now() + TTL_MS });
  return user;
}
