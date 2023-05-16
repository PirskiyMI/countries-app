import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { ICountry } from '../../models/ICountry';

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
   }),
});
