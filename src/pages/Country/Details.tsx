import { useParams } from 'react-router-dom';
import { countryApi } from '../../store/services/countryApi';
import styles from './styles/style.module.scss';
import cn from 'classnames';
import { Preloader } from '../../components/Preloader/Preloader';
import { DetailsWrapper } from './DetailsWrapper';

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