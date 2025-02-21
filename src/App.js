import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/page/login';
import HomePage from './components/page/home';
import ProtectedRoute from './common/ProtectedRoute';
import { ToastContainer } from 'react-toastify';

import './App.css';

const App = () => {
  return (
    <Router>
      <div className="surface-ground">
        <ToastContainer />
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
