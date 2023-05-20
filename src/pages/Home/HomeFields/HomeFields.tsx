import { HomeSearch } from './HomeSearch';
import { HomeSelect } from './HomeSelect';
import styles from './styles/style.module.scss';
import { HomeFieldsProps } from './types';


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
