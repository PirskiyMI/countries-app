export interface ICountry {
   flags: CountryFlags;
   name: CountryName;
   currencies: any;
   capital: string[];
   region: string;
   borders: string[];
   population: number;
   continents: string[];
}

export interface CountryFlags {
   png: string;
   svg: string;
   alt: string;
}

export interface CountryName {
   common: string;
   official: string;
   nativeName: any;
}
