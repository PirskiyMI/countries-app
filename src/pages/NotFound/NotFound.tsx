import { Link } from 'react-router-dom';
import styles from './styles/style.module.scss';
import cn from 'classnames';

export const NotFound = () => {
   return (
      <div className={styles.error}>
         <div className={cn(styles.error_container, '_container')}>
            <div className={styles.error_body}>
               <div className={styles.error_title}>
                  Page not found
               </div>
               <div className={styles.error_text}>
                  This page doesn't exist
               </div>
               <Link to={`/`} className={styles.error_button}>Back to main page</Link>
            </div>
         </div>
      </div>
   );
};
