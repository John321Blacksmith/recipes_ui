import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { recipeApi } from './api/recipes';


export const store = configureStore({
    reducer: {
        [recipeApi.reducerPath]: recipeApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(recipeApi.middleware)
})

setupListeners(store.dispatch)
// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch  //define a tree object which listens a whole app state and acts upon any changes