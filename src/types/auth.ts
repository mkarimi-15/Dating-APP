export interface User {
  id: string;
  email: string;
  name: string;
  birthDate?: string;
  profilePhoto?: string;
  bio?: string;
  createdAt: string;
}

export interface SignInCredentials {
  email: string;
  password: string;
}

export interface SignUpCredentials {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}
