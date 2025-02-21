import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/page/login';
import HomePage from './components/page/home';

import './App.css';
import ProtectedRoute from './common/ProtectedRoute';

const App = () => {
  return (
    <Router>
      <div className="surface-ground">
        <Routes>
          <Route path="/" element={<LoginPage />}/>
          <Route 
            path="/home" 
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
