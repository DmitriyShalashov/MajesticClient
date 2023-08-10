import { configureStore } from '@reduxjs/toolkit'
import stageSlice from './slices/stageSlice'
import { lobbyApi } from './api/LobbyApi'
import { authApi } from './api/AuthApi'
import { CurriedGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware'

export const store = configureStore({
  reducer: {
    [lobbyApi.reducerPath]:lobbyApi.reducer,
    [authApi.reducerPath]:authApi.reducer,
    stage:stageSlice
  },
  middleware: (getDefaultMiddleware:CurriedGetDefaultMiddleware) => getDefaultMiddleware().concat(
    lobbyApi.middleware,authApi.middleware
  ),
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch