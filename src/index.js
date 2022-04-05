import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

// createRoot tells react where this react application (ui) should be placed in the webpage that is loaded (see index.html in the public folder)
const root = ReactDOM.createRoot(document.getElementById('root'));//See Root in index.html
root.render(<App />);
