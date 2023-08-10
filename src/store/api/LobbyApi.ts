import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ILobby, PostLobby } from '../../consts/types'



export const lobbyApi = createApi({
  reducerPath: 'lobbyApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/lobby' }),
  endpoints: (builder) => ({
    getAllLobbies: builder.query<ILobby[],null>({
        query: () => `/`,
    }),
    getOneLobby: builder.query<ILobby,number>({
        query: (id) => `/${id}`,
    }),
    createLobby: builder.mutation<string, PostLobby>({
        query: (lobby) => ({
            url:"/",
            method:"POST",
            body:lobby,
        })
    }),
    }),
})




export const { useGetOneLobbyQuery,useCreateLobbyMutation,useGetAllLobbiesQuery } = lobbyApi