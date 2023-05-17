import { ICountry } from '../../../models/ICountry';
import { countryApi } from '../../../store/services/countryApi';
import styles from './styles/style.module.scss';
import cn from 'classnames';

import {Link} from 'react-router-dom'

export interface HomeCardsProps {
   select: string;
   value: string;
}

export const CountryCard = ({ flags, name, population, region, capital }: ICountry) => {
   return (
      <Link to={`/country/${name.common.toLowerCase()}`} className={cn(styles.cards_item, styles.card)}>
         <div className={styles.card_img}>
            <img src={flags.png} alt={flags.alt} />
         </div>
         <div className={styles.card_info}>
            <h3 className={styles.card_title}>{name.common}</h3>
            <div className={styles.card_stats}>
               <span>Population: {population}</span>
               <span>Region: {region}</span>
               <span>Capital: {capital}</span>
            </div>
         </div>
      </Link>
   );
};

export const HomeCards = ({ value, select }: HomeCardsProps) => {
   const { data, isLoading, isError } = countryApi.useFetchCountryQuery(
      'name,region,capital,population,flags',
   );

   if (isLoading) {
      return <div>Loading</div>;
   }

   return (
      <section className={styles.cards}>
         {data?.map(
            (el: ICountry) =>
               el.region === select &&
               el.name.common.toLowerCase().includes(value.toLowerCase()) && (
                  <CountryCard key={el.name.common} {...el} />
               ),
         )}
      </section>
   );
};
