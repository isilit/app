import { useNavigate, useParams } from 'react-router-dom';
import Header from '../../components/header/Header';
import UserProfile from '../../components/userProfile/UserProfile';
import { getStudentById } from '../../students';
import '../../components/userProfile/UserProfile.css';

export default function UserPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const student = getStudentById(id);

  if (!student) {
    return (
      <div className="app">
        <Header />
        <div className="userProfileContainer userNotFound">
          <h3>Студент не найден</h3>
          <p>Пользователь с id «{id}» не существует.</p>
          <button type="button" onClick={() => navigate('/main')}>
            Вернуться на главную
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <Header />
      <UserProfile student={student} />
    </div>
  );
}
