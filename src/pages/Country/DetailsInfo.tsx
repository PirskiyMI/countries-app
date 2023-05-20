import { DetailsInfoProps } from "./types";
import styles from './styles/style.module.scss'
import { DetailsLists } from "./DetailsLists";
import { DetailsBorders } from "./DetailsBorders";

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
