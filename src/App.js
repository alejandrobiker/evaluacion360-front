import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import { Button } from 'primereact/button'

import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>Mi Aplicación</h1>
      <Button label="Click Me" />
    </div>
  );
};

export default App;
