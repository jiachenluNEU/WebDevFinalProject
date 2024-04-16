import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './Components/LoginPage/LoginForm';
import RegisterForm from './Components/RegisterForm/RegisterForm';
function App() {
  return (
    <Router>
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </div>
  </Router>
);
}

export default App;
