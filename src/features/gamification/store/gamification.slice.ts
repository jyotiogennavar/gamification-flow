import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

import { createReward } from "@/features/gamification/services/reward.service"
import type {
  RewardFlowStatus,
  RewardFormValues,
} from "@/features/gamification/types/reward.types"

type StoredReward = RewardFormValues & {
  id: string
  createdAt: string
}

type GamificationState = {
  isRewardModalOpen: boolean
  flowStatus: RewardFlowStatus
  flowErrorMessage: string | null
  rewards: StoredReward[]
}

const initialState: GamificationState = {
  isRewardModalOpen: false,
  flowStatus: "form",
  flowErrorMessage: null,
  rewards: [],
}

export const submitReward = createAsyncThunk<
  RewardFormValues,
  RewardFormValues,
  { rejectValue: string }
>("gamification/submitReward", async (values, { rejectWithValue }) => {
  try {
    await createReward(values)
    return values
  } catch {
    return rejectWithValue("We couldn't create the reward. Please try again.")
  }
})

const gamificationSlice = createSlice({
  name: "gamification",
  initialState,
  reducers: {
    openRewardModal(state) {
      state.isRewardModalOpen = true
    },
    closeRewardModal(state) {
      state.isRewardModalOpen = false
      state.flowStatus = "form"
      state.flowErrorMessage = null
    },
    resetRewardFlow(state) {
      state.flowStatus = "form"
      state.flowErrorMessage = null
    },
  },
  extraReducers(builder) {
    builder
      .addCase(submitReward.pending, (state) => {
        state.flowStatus = "submitting"
        state.flowErrorMessage = null
      })
      .addCase(submitReward.fulfilled, (state, action) => {
        state.flowStatus = "success"
        state.flowErrorMessage = null
        state.rewards.unshift({
          ...action.payload,
          id: crypto.randomUUID(),
          createdAt: new Date().toISOString(),
        })
      })
      .addCase(submitReward.rejected, (state, action) => {
        state.flowStatus = "error"
        state.flowErrorMessage =
          action.payload ?? "We couldn't create the reward. Please try again."
      })
  },
})

export const { closeRewardModal, openRewardModal, resetRewardFlow } =
  gamificationSlice.actions

export const gamificationReducer = gamificationSlice.reducer
