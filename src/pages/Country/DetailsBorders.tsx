import { Link } from "react-router-dom";
import { countryApi } from "../../store/services/countryApi";
import { DetailsBordersProps } from "./types";
import { useState, useEffect } from 'react';
import styles from './styles/styles.module.scss'

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