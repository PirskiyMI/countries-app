import { ICountryCardName } from "../../../models/ICountryCard";

export interface DetailsBordersProps {
   borders: string[];
}
export interface DetailsListsProps {
   name: ICountryCardName;
   tld: string[];
   currencies: any;
   capital: string[];
   region: string;
   subregion: string;
   languages: any;
   population: number;
}
export interface DetailsInfoProps {
   name: ICountryCardName;
   tld: string[];
   currencies: any;
   capital: string[];
   region: string;
   subregion: string;
   languages: any;
   borders: string[];
   population: number;
}
