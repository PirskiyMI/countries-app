import { Header } from './components/Header';
import { Home } from './pages/Home/Home';
import { SELECT_ARROW } from './pages/Home/HomeFields/HomeFields';
import './styles/App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { NotFound } from './pages/NotFound/NotFound';
import { Country } from './pages/Country/Country';

export const App = () => {
   const [isActive, setActive] = useState(false);

   const selectToggle = (e: any) => {
      if (!e.target.classList.contains(SELECT_ARROW) && isActive === true) {
         console.log('click');
         setActive(false);
      }
   };

   return (
      <div onClick={selectToggle}>
         <Header />
         <Routes>
            <Route path="/" element={<Home isActive={isActive} setActive={setActive} />} />
            <Route path="/country/:name" element={<Country />} />
            {/* <Route path="*" element={<NotFound />} /> */}
         </Routes>
      </div>
   );
};

//
