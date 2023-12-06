// ========== packages ========== \\
import ReactDOM from 'react-dom/client';

// ========== styles ========== \\
import './index.css';

// ========== components ========== \\
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <main className='font-Poppins'>
    <App />
  </main>
);