import cn from 'classnames';
import { IoChevronDown } from 'react-icons/io5';

import styles from './styles/style.module.scss';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { selectSlice } from '../../../store/reducers/selectSlice';
import { HomeSelectProps } from './types';
import { countryList } from './constants';

export const HomeSelect = ({ select, setSelect }: HomeSelectProps) => {
   const { isActive } = useAppSelector((state) => state.selectReducer);
   const dispatch = useAppDispatch();

   const toggleSelect = selectSlice.actions.toggleSelect(!isActive);

   return (
      <div className={styles.home_select}>
         <div>{select}</div>
         <div className={styles.home_arrow} onClick={() => dispatch(toggleSelect)}>
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
