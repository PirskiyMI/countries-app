export interface ICountry {
   flags: ICountryFlags;
   name: ICountryName;
   currencies: any;
   capital: string[];
   region: string;
   borders: string[];
   population: number;
   continents: string[];
}

export interface ICountryDetails extends ICountry {
   tld: string[];
   subregion: string;
   languages: any[];
}

export interface ICountryFlags {
   png: string;
   svg: string;
   alt: string;
}

export interface ICountryName {
   common: string;
   official: string;
   nativeName: any;
}
