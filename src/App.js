import { useSelector } from 'react-redux';
import './App.css';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  return (
    <div className='App'>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
    </div>
  );
}

export default App;
