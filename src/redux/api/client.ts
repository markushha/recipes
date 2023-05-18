import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const client = createApi({
  reducerPath: 'api',
  tagTypes: ['Recipe'],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000" }),
  endpoints: (builder) => ({/* injections */})
})