export const REWARD_TYPES = ["signup", "purchase"] as const

export const REWARD_TYPE_OPTIONS = [
  { value: "signup", label: "Signup" },
  { value: "purchase", label: "Purchase" },
] as const

export const MIN_REWARD_POINTS = 1
export const MAX_REWARD_POINTS = 100000
export const REWARD_SUCCESS_AUTO_CLOSE_MS = 1500

export const DEFAULT_REWARD_FORM_VALUES = {
  rewardType: "signup",
  points: 50,
  isTimeBound: false,
  expiryDate: undefined,
} as const
