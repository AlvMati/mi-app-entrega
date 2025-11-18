import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface AuthContextType {
  user: string | null;
  login: (username: string, password: string) => boolean;
  register: (username: string, password: string) => boolean;
  logout: () => void;
}

interface Props {
  children: ReactNode;
}

interface User {
  username: string;
  password: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const usersDB: User[] = []; // Base de datos temporal local

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<string | null>(null);

  const login = (username: string, password: string) => {
    const found = usersDB.find(u => u.username === username && u.password === password);
    if (found) {
      setUser(username);
      return true;
    }
    return false;
  };

  const register = (username: string, password: string) => {
    const exists = usersDB.some(u => u.username === username);
    if (exists) return false;
    usersDB.push({ username, password });
    setUser(username);
    return true;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};