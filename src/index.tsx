import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { App } from './App';
import { Provider } from 'react-redux';
import { setupStore } from './store';
import { BrowserRouter } from 'react-router-dom';

const store = setupStore();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
   <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
         <App />
      </Provider>
   </BrowserRouter>,
);
