import { ICountryDetails } from '../../models/ICountry';
import { DetailsFlag } from './DetailsFlag';
import { DetailsInfo } from './DetailsInfo';

export const DetailsWrapper = ({ flags, ...detailInfo }: ICountryDetails) => {
   return (
      <>
         <DetailsFlag {...flags} />
         <DetailsInfo {...detailInfo} />
      </>
   );
};
