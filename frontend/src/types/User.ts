export interface User {
  _id: string;
  name: string;
  email: string;
  isVerified: boolean;
  lastLogin?: string;
  createdAt: string;
  updatedAt: string;
}
