import { useEffect, useState } from 'react';
import styles from './styles/style.module.scss';
import cn from 'classnames';
import { HomeFields } from './HomeFields/HomeFields';
import { HomeCards } from './HomeCards/HomeCards';

export interface HomeProps {
   isActive: boolean;
   setActive: (arg: boolean) => void;
}

export const Home = (props: HomeProps) => {
   const [value, setValue] = useState('');
   const [select, setSelect] = useState('Europe');

   return (
      <section className={styles.home}>
         <div className={cn(styles.home_container, '_container')}>
            <HomeFields value={value} setValue={setValue} select={select} setSelect={setSelect} {...props}/>
            <HomeCards value={value} select={select} />
         </div>
      </section>
   );
};
