import cn from 'classnames';
import { ICountry } from '../../../models/ICountry';
import { Link } from 'react-router-dom';
import styles from './styles/style.module.scss';

export const HomeItem = ({ flags, name, population, region, capital }: ICountry) => {
   return (
      <Link
         to={`/countries-app/country/${name.common.toLowerCase()}`}
         className={cn(styles.cards_item, styles.card)}>
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
