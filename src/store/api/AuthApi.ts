import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { PostLog, PostReg } from '../../consts/types'

export interface IToken{
    token:string
}

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/auth' }),
  endpoints: (builder) => ({
    registration: builder.mutation<IToken,PostReg>({
        query:(user) => ({
            url:"/reg",
            method:"POST",
            body:user
        }),
    }),
    login: builder.mutation<IToken,PostLog>({
        query:(user) => ({
            url:"/log",
            method:"POST",
            body:user
        }),
    }),
    }),
})




export const { useLoginMutation,useRegistrationMutation } = authApi