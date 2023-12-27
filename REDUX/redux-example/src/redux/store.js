// contiene el estado de la aplicacion y su funcion reducer

import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
    }
}) 