import { Home } from './pages/Home/Home';
import { SELECT_ARROW } from './pages/Home/HomeFields/HomeFields';
import './styles/App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { NotFound } from './pages/NotFound/NotFound';
import { Details } from './pages/Country/Details';

import { Layout } from './components/Layout';

export const App = () => {
   const [isActive, setActive] = useState(false);

   const selectToggle = (e: any) => {
      if (!e.target.classList.contains(SELECT_ARROW) && isActive === true) {
         setActive(false);
      }
   };

   return (
      <div className='app' onClick={selectToggle}>
         <Routes>
            <Route path="/" element={<Layout />}>
               <Route index element={<Home isActive={isActive} setActive={setActive} />} />
               <Route path="/country/:name" element={<Details />} />
               <Route path="*" element={<NotFound />} />
            </Route>
         </Routes>
      </div>
   );
};

//
