import { useReducer } from "react"

import type { RewardFlowStatus } from "@/features/gamification/types/reward.types"

type RewardFlowState = {
  status: RewardFlowStatus
  errorMessage: string | null
}

type RewardFlowAction =
  | { type: "SUBMIT_START" }
  | { type: "SUBMIT_SUCCESS" }
  | { type: "SUBMIT_ERROR"; payload: string }
  | { type: "RESET" }

const initialState: RewardFlowState = {
  status: "form",
  errorMessage: null,
}

function rewardFlowReducer(
  state: RewardFlowState,
  action: RewardFlowAction
): RewardFlowState {
  switch (action.type) {
    case "SUBMIT_START":
      return { status: "submitting", errorMessage: null }
    case "SUBMIT_SUCCESS":
      return { status: "success", errorMessage: null }
    case "SUBMIT_ERROR":
      return { status: "error", errorMessage: action.payload }
    case "RESET":
      return initialState
    default:
      return state
  }
}

export function useRewardFlow() {
  const [state, dispatch] = useReducer(rewardFlowReducer, initialState)

  return {
    status: state.status,
    errorMessage: state.errorMessage,
    startSubmission: () => dispatch({ type: "SUBMIT_START" }),
    markSuccess: () => dispatch({ type: "SUBMIT_SUCCESS" }),
    markError: (message: string) =>
      dispatch({ type: "SUBMIT_ERROR", payload: message }),
    reset: () => dispatch({ type: "RESET" }),
  }
}
