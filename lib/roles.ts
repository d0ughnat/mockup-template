export const ROLES = {
  USER: 'USER',
  ADMIN: 'ADMIN',
} as const;

export type Role = (typeof ROLES)[keyof typeof ROLES];

export interface User {
  id: string;
  email: string;
  name: string;
  role: Role;
}

export const MOCK_USERS: User[] = [
  {
    id: '1',
    email: 'user@example.com',
    name: 'Demo User',
    role: ROLES.USER,
  },
  {
    id: '2',
    email: 'admin@example.com',
    name: 'Admin User',
    role: ROLES.ADMIN,
  },
];

export function getUserByEmail(email: string): User | undefined {
  return MOCK_USERS.find(user => user.email === email);
}

export function getUserById(id: string): User | undefined {
  return MOCK_USERS.find(user => user.id === id);
}

export function hasRole(user: User | null, role: Role): boolean {
  return user?.role === role;
}
