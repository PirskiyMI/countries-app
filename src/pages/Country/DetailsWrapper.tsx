import { ICountryCard } from "../../models/ICountryCard";
import { DetailsFlag } from "./DetailsFlag";
import { DetailsInfo } from "./DetailsInfo";

export const DetailsWrapper = ({ flags, ...detailInfo }: ICountryCard) => {
   return (
      <>
         <DetailsFlag {...flags} />
         <DetailsInfo {...detailInfo} />
      </>
   );
};
