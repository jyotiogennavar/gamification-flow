import { configureStore } from "@reduxjs/toolkit"

import { gamificationReducer } from "@/features/gamification/store/gamification.slice"

export const store = configureStore({
  reducer: {
    gamification: gamificationReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
