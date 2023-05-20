import { ICountryName } from "../../../models/ICountry";

export interface DetailsBordersProps {
   borders: string[];
}
export interface DetailsListsProps {
   name: ICountryName;
   tld: string[];
   currencies: any;
   capital: string[];
   region: string;
   subregion: string;
   languages: any;
   population: number;
}
export interface DetailsInfoProps extends DetailsListsProps {
   borders: string[];
}
