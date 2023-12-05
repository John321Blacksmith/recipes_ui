import { configureStore } from '@reduxjs/toolkit';
import { recipesApi } from './recipes.api/recipes.api';
import { setupListeners } from '@reduxjs/toolkit/query';


export const store = configureStore({
    reducer: {
        [recipesApi.reducerPath]: recipesApi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(recipesApi.middleware)
})

setupListeners(store.dispatch)


export type RootState = ReturnType<typeof store.getState>