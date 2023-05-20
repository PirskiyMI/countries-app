import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { ICountry, ICountryDetails } from '../models/ICountry';
// import { ICountryCard } from '../models/ICountryCard';

export const countryApi = createApi({
   reducerPath: 'countryApi',
   baseQuery: fetchBaseQuery({
      baseUrl: 'https://restcountries.com/v3.1/',
   }),
   endpoints: (build) => ({
      fetchCountry: build.query<ICountry[], string>({
         query: (fields: string) => ({
            url: '/all',
            params: { fields: fields },
         }),
      }),
      fetchCurrentCountry: build.query<ICountryDetails[], string>({
         query: (countryName: string) => ({
            url: `/name/${countryName}`,
            params: {
               fields:
                  'flags,name,population,region,subregion,capital,tld,currencies,languages,borders',
            },
         }),
      }),
      fetchCountryNeighbours: build.query({
         query: (args: string) => ({
            url: `/alpha`,
            params: {
               codes: args,
            },
         }),
      }),
   }),
});
