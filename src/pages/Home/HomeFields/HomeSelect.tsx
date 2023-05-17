import { useState } from 'react';
import cn from 'classnames';
import { IoChevronDown } from 'react-icons/io5';

import styles from './styles/style.module.scss';

export interface HomeSelectProps {
   isActive: boolean;
   select: string;
   setActive: (arg: boolean) => void;
   setSelect: (value: string) => void;
}

export const HomeSelect = ({select, setSelect, isActive, setActive}: HomeSelectProps) => {

   const countryList = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

   return (
      <div className={styles.home_select}>
         <div>{select}</div>
         <div className={styles.home_arrow} onClick={() => setActive(!isActive)}>
            <IoChevronDown />
         </div>
         <ul
            className={cn(styles.home_options, {
               [styles.home_options__hide]: !isActive,
            })}>
            {countryList.map((el) => (
               <li
                  key={el}
                  className={styles.home_option}
                  onClick={() => {
                     setSelect(el);
                  }}>
                  {el}
               </li>
            ))}
         </ul>
      </div>
   );
};
