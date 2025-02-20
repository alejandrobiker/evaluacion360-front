import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import LoginPage from './components/page/login';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <LoginPage />
    </div>
  );
};

export default App;
