import { useState } from 'react';
import { HomeSearch } from './HomeSearch';
import { HomeSelect } from './HomeSelect';
import styles from './styles/style.module.scss';
import { HomeFieldsProps } from './types';

export const SELECT_ARROW = `${styles.home_arrow}`;

export const HomeFields = (props: HomeFieldsProps) => {
   return (
      <div className={styles.home_inputs}>
         <HomeSearch value={props.value} setValue={props.setValue} />
         <HomeSelect
            select={props.select}
            setSelect={props.setSelect}
         />
      </div>
   );
};
