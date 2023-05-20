import { ICountryCardFlags } from "../../models/ICountryCard";
import styles from './styles/style.module.scss'

export const DetailsFlag = ({ svg, alt }: ICountryCardFlags) => {
   return <img className={styles.country_flag} src={svg} alt={alt} />;
};