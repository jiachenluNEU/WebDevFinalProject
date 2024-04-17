import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import ChoosePlanPage from './Components/ChoosePlanPage/ChoosePlanPage'; // Import the ChoosePlanPage component
import LoginPage from './Components/LoginPage/LoginForm';
import RegisterForm from './Components/RegisterForm/RegisterForm';
function App() {
  return (
    <Router>
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/choose-plan" element={<ChoosePlanPage />} />  // Add route for choosing plans
      </Routes>
    </div>
  </Router>
);
}

export default App;
