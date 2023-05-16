import { Header } from './components/Header';
import { countryApi } from './store/services/countryApi';
import './styles/App.css';

export const App = () => {
   const { data } = countryApi.useFetchCountryQuery('name,region,capital,population,flags');

   return (
      <>
         <Header />
         <div>App</div>
      </>
   );
};
