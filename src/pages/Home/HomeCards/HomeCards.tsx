import { Preloader } from '../../../components/Preloader/Preloader';
import { ICountry } from '../../../models/ICountry';
import { countryApi } from '../../../store/services/countryApi';
import { HomeItem } from './HomeItem';
import styles from './styles/style.module.scss';

export interface HomeCardsProps {
   select: string;
   value: string;
}

export const HomeCards = ({ value, select }: HomeCardsProps) => {
   const { data, isLoading, isError } = countryApi.useFetchCountryQuery(
      'name,region,capital,population,flags',
   );
   if (isLoading) {
      return <Preloader/>;
   }
   return (
      <section className={styles.cards}>
         {data?.map(
            (el: ICountry) =>
               el.region === select &&
               el.name.common.toLowerCase().includes(value.toLowerCase()) && (
                  <HomeItem key={el.name.common} {...el} />
               ),
         )}
      </section>
   );
};
