import { useState } from 'react';
import { HomeSearch } from './HomeSearch';
import { HomeSelect } from './HomeSelect';
import styles from './styles/style.module.scss';

export interface HomeFieldsProps {
   value: string;
   setValue: (value: string) => void;
   select: string;
   setSelect: (value: string) => void;
   isActive: boolean;
   setActive: (arg: boolean) => void;
}

export const SELECT_ARROW = `${styles.home_arrow}`;

export const HomeFields = (props: HomeFieldsProps) => {
   // const [isActive, setActive] = useState(false);

   // const selectToggle = (e: any) => {
   //    if (!e.target.classList.contains(`${styles.home_arrow}`) && isActive === true) {
   //       console.log('click');
   //       setActive(false);
   //    }
   // };

   return (
      <div className={styles.home_inputs}>
         <HomeSearch value={props.value} setValue={props.setValue} />
         <HomeSelect
            select={props.select}
            setSelect={props.setSelect}
            isActive={props.isActive}
            setActive={props.setActive}
         />
      </div>
   );
};
