import { useState, useEffect } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import { IoMoonOutline, IoMoon } from 'react-icons/io5';
import {Link} from 'react-router-dom';

export const Header = () => {
   const [theme, setTheme] = useState('light');

   const changeTheme = () => {
      theme === 'light' ? setTheme('dark') : setTheme('light');
   };

   useEffect(() => {
      document.body.setAttribute('data-theme', theme);
   }, [changeTheme]);

   return (
      <header className={styles.header}>
         <div className={cn(styles.header_container, '_container')}>
            <Link to='/' className={styles.header_title}>Where in the world</Link>
            <div className={styles.header_switcher} onClick={changeTheme}>
               <span className={styles.header_icon}>
                  {theme === 'light' ? <IoMoonOutline /> : <IoMoon />}
               </span>
               <span className={styles.header_text}>
                  {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
               </span>
            </div>
         </div>
      </header>
   );
};
