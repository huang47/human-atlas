import {createRoot} from 'react-dom/client';
import Home from '../app/page';
import '../app/globals.css';
import {initializePreferences} from '../app/preferences';
initializePreferences();
createRoot(document.getElementById('root')!).render(<Home/>);
