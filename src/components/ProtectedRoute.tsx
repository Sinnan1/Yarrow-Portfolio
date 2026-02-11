import { Outlet } from 'react-router-dom';
import { useState } from 'react';

const ProtectedRoute = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        return localStorage.getItem('isAdminAuthenticated') === 'true';
    });
    const [password, setPassword] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Hardcoded password for simplicity - can be changed to env var
        if (password === 'yarrow2024') {
            localStorage.setItem('isAdminAuthenticated', 'true');
            setIsAuthenticated(true);
        } else {
            alert('Incorrect password');
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-cream">
                <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-xl w-96">
                    <h2 className="text-2xl font-serif text-center mb-6">Admin Access</h2>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter Password"
                        className="w-full p-3 border border-gray-300 rounded mb-4"
                    />
                    <button
                        type="submit"
                        className="w-full bg-gold text-white py-3 rounded hover:bg-gold/90 transition-colors"
                    >
                        Login
                    </button>
                </form>
            </div>
        );
    }

    return <Outlet />;
};

export default ProtectedRoute;
