import { IoSearchOutline } from 'react-icons/io5';

import styles from './styles/style.module.scss';

export interface HomeSearchProps {
   value: string;
   setValue: (value: string) => void;
}

export const HomeSearch = ({ value, setValue }: HomeSearchProps) => {
   return (
      <div className={styles.home_search}>
         <input
            className={styles.home_search__field}
            type="text"
            value={value}
            placeholder="Search for a country..."
            onChange={(e) => setValue(e.target.value)}
         />
         <div className={styles.home_search__icon}>
            <IoSearchOutline />
         </div>
      </div>
   );
};
