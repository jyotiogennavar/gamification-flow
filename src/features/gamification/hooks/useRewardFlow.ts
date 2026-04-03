import { useAppDispatch, useAppSelector } from "@/app/hooks"
import {
  resetRewardFlow,
  submitReward,
} from "@/features/gamification/store/gamification.slice"
import type { RewardFormValues } from "@/features/gamification/types/reward.types"

export function useRewardFlow() {
  const dispatch = useAppDispatch()
  const status = useAppSelector((state) => state.gamification.flowStatus)
  const errorMessage = useAppSelector(
    (state) => state.gamification.flowErrorMessage
  )

  return {
    status,
    errorMessage,
    submit: async (values: RewardFormValues) => {
      const resultAction = await dispatch(submitReward(values))
      return submitReward.fulfilled.match(resultAction)
    },
    reset: () => dispatch(resetRewardFlow()),
  }
}
