import { Link, useParams } from 'react-router-dom';
import { countryApi } from '../../store/services/countryApi';
import styles from './styles/style.module.scss';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import { Preloader } from '../../components/Preloader/Preloader';
import { ICountryCard, ICountryCardFlags, ICountryCardName } from '../../models/ICountryCard';

export const DetailsFlag = ({ svg, alt }: ICountryCardFlags) => {
   return <img className={styles.country_flag} src={svg} alt={alt} />;
};

export interface DetailsBordersProps {
   borders: string[];
}

export interface DetailsListsProps {
   name: ICountryCardName;
   tld: string[];
   currencies: any;
   capital: string[];
   region: string;
   subregion: string;
   languages: any;
   population: number;
}

export interface DetailsInfoProps {
   name: ICountryCardName;
   tld: string[];
   currencies: any;
   capital: string[];
   region: string;
   subregion: string;
   languages: any;
   borders: string[];
   population: number;
}

export const DetailsBorders = ({ borders }: DetailsBordersProps) => {
   const [neighborsList, setNeighborsList] = useState([]);
   const { data } = countryApi.useFetchCountryNeighboursQuery(borders.join(','));

   useEffect(() => {
      if (data) {
         setNeighborsList(data.map((el: any) => el.name.common));
      }
   }, [data]);

   return (
      <div className={styles.country_borders}>
         <b>Border Countries:</b>
         <div className={styles.country_wrapper}>
            {' '}
            {neighborsList.length !== 0 ? (
               neighborsList.map((el: string) => (
                  <Link key={el} to={`/country/${el}`} className={styles.country_border}>
                     {el}{' '}
                  </Link>
               ))
            ) : (
               <div>This country has no borders</div>
            )}
         </div>
      </div>
   );
};

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

export const DetailsInfo = ({ borders, ...detailsLists }: DetailsInfoProps) => {
   return (
      <div className={styles.country_info}>
         <h2 className={styles.country_title}>{detailsLists.name.common}</h2>
         <div className={styles.country_body}>
            <DetailsLists {...detailsLists} />
            <DetailsBorders borders={borders} />
         </div>
      </div>
   );
};

export const DetailsWrapper = ({ flags, ...detailInfo }: ICountryCard) => {
   return (
      <>
         <DetailsFlag {...flags} />
         <DetailsInfo {...detailInfo} />
      </>
   );
};

export const Details = () => {
   const { name } = useParams();
   const { data, isLoading } = countryApi.useFetchCurrentCountryQuery(name || '');

   if (isLoading) {
      return <Preloader />;
   }

   return (
      <section className={styles.country}>
         <div className={cn(styles.country_container, `_container`)}>
            {data && <DetailsWrapper {...data[0]} />}
         </div>
      </section>
   );
};
