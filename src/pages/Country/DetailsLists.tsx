import styles from './styles/style.module.scss'
import { DetailsListsProps } from './types';

export const DetailsLists = (props: DetailsListsProps) => {
   const languagesArr = Object.keys(props.languages);
   const currenciesArr = Object.keys(props.currencies);

   return (
      <div className={styles.country_lists}>
         <ul className={styles.country_list}>
            <li className={styles.country_item}>
               <span>Official Name:</span> {props.name.official}
            </li>
            <li className={styles.country_item}>
               <span>Population:</span> {props.population}
            </li>
            <li className={styles.country_item}>
               <span>Region:</span> {props.region}
            </li>
            <li className={styles.country_item}>
               <span>Sub Region:</span> {props.subregion}
            </li>
            <li className={styles.country_item}>
               <span>Capital:</span> {props.capital}
            </li>
         </ul>
         <ul className={styles.country_list}>
            <li className={styles.country_item}>
               <span>Top Level Domain:</span> {props.tld.map((el: string) => `${el} `)}
            </li>
            <li className={styles.country_item}>
               <span>Currencies:</span> {currenciesArr.map((el: string) => `${el} `)}
            </li>
            <li className={styles.country_item}>
               <span>Languages:</span> {languagesArr.map((el: string) => `${el} `)}
            </li>
         </ul>
      </div>
   );
};