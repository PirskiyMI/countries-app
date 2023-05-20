import { Home } from './pages/Home/Home';
import { SELECT_ARROW } from './pages/Home/HomeFields/constants/index';
import { Routes, Route } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from './hooks';
import { selectSlice } from './store/reducers/selectSlice';

import { Layout } from './components/Layout';
import { NotFound } from './pages/NotFound/NotFound';
import { Details } from './pages/Country/Details';

export const App = () => {
   const { isActive } = useAppSelector((state) => state.selectReducer);
   const dispatch = useAppDispatch();

   const selectToggle = (e: any) => {
      if (!e.target.classList.contains(SELECT_ARROW) && isActive === true) {
         dispatch(selectSlice.actions.toggleSelect(false));
      }
   };

   return (
      <div onClick={selectToggle}>
         <Routes>
            <Route path="/country-app" element={<Layout />}>
               <Route index element={<Home />} />
               <Route path="country/:name" element={<Details />} />
               <Route path="*" element={<NotFound />} />
            </Route>
         </Routes>
      </div>
   );
};

//
