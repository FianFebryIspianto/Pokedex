import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getAllPokemon: builder.query({
      query: (offset) => `pokemon/?limit=10&offset=${offset}`,
    }),

    getPokemonByName: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
  }),
});
export const { useGetPokemonByNameQuery, useGetAllPokemonQuery } = pokemonApi;
