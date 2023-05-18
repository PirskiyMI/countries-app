export interface ICountryCard {
   flags: ICountryCardFlags;
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

export interface ICountryCardFlags {
   png: string;
   svg: string;
   alt: string;
}

export interface ICountryCardName {
   common: string;
   official: string;
   nativeName: any;
}