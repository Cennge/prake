import { useAuth } from '@app/providers/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import './ProfilePage.css';

export const ProfilePage = () => {
    const { user, logout, isLoading } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoading && !user) {
            navigate('/login');
        }
    }, [user, isLoading, navigate]);

    if (!user) return null;

    return (
        <div className="profile-page">
            <div className="profile-container">
                <div className="profile-header">
                    <h1>Мій кабінет</h1>
                    <button onClick={() => { logout(); navigate('/'); }} className="logout-btn">
                        Вийти
                    </button>
                </div>

                <div className="profile-content">
                    <div className="profile-card">
                        <div className="profile-avatar">
                            {user.name.charAt(0).toUpperCase()}
                        </div>
                        <div className="profile-info">
                            <h2>{user.name}</h2>
                            <p>{user.email}</p>
                        </div>
                    </div>

                    <div className="profile-sections">
                        <div className="section-card">
                            <h3>Мої замовлення</h3>
                            <div className="empty-state">
                                <p>У вас поки немає замовлень</p>
                            </div>
                        </div>

                        <div className="section-card">
                            <h3>Обране</h3>
                            <div className="empty-state">
                                <p>Список бажань порожній</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
