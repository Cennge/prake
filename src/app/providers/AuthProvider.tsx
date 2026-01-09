import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

export interface User {
    id: string;
    name: string;
    email: string;
}

interface AuthContextType {
    user: User | null;
    login: (email: string, password: string) => Promise<boolean>;
    register: (name: string, email: string, password: string) => Promise<boolean>;
    logout: () => void;
    isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const storedUser = localStorage.getItem('prake_current_user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setIsLoading(false);
    }, []);

    const login = async (email: string, password: string): Promise<boolean> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const usersStr = localStorage.getItem('prake_users');
                const users = usersStr ? JSON.parse(usersStr) : [];

                const foundUser = users.find((u: any) => u.email === email && u.password === password);

                if (foundUser) {
                    const { password, ...safeUser } = foundUser;
                    setUser(safeUser);
                    localStorage.setItem('prake_current_user', JSON.stringify(safeUser));
                    resolve(true);
                } else {
                    resolve(false);
                }
            }, 800);
        });
    };

    const register = async (name: string, email: string, password: string): Promise<boolean> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const usersStr = localStorage.getItem('prake_users');
                const users = usersStr ? JSON.parse(usersStr) : [];

                if (users.find((u: any) => u.email === email)) {
                    resolve(false);
                    return;
                }

                const newUser = { id: crypto.randomUUID(), name, email, password };
                users.push(newUser);
                localStorage.setItem('prake_users', JSON.stringify(users));

                const { password: _, ...safeUser } = newUser;
                setUser(safeUser);
                localStorage.setItem('prake_current_user', JSON.stringify(safeUser));

                resolve(true);
            }, 800);
        });
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('prake_current_user');
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
