import { ICountryFlags } from '../../models/ICountry';
import styles from './styles/style.module.scss'

export const DetailsFlag = ({ svg, alt }: ICountryFlags) => {
   return <img className={styles.country_flag} src={svg} alt={alt} />;
};