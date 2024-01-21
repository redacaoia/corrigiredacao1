import type { ConfUser } from "~/types";

const users: ConfUser[] = [
  {
    id: "1",
    email: "user@example.com",
    name: "WalysonMoura",
    username: "WalysonMoura",
    createdAt: 1641820800,
  },
];

export async function getUserByUsername(username: string): Promise<ConfUser> {
  const user = users.find((u) => u.username === username);
  if (!user) {
    // You can throw an error or handle it based on your requirements.
    throw new Error(`User with username ${username} not found.`);
  }
  return user
}
