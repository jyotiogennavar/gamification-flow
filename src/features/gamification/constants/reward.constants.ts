export const REWARD_EVENTS = ["sales_threshold", "posting_frequency", "onboarded"] as const

export const REWARD_EVENT_OPTIONS = [
  { value: "sales_threshold", label: "Cross $X in sales" },
  { value: "posting_frequency", label: "Posts X times every Y period" },
  { value: "onboarded", label: "Is Onboarded" },
] as const

export const REWARD_TYPES = ["points", "bonus", "badge"] as const

export const REWARD_WITH_OPTIONS = [
  { value: "points", label: "Points" },
  { value: "bonus", label: "Bonus" },
  { value: "badge", label: "Badge" },
] as const

export const MIN_REWARD_VALUE = 1
export const MAX_REWARD_VALUE = 1000000
export const REWARD_SUCCESS_AUTO_CLOSE_MS = 1500

export const DEFAULT_REWARD_FORM_VALUES = {
  rewardEvent: undefined,
  rewardType: undefined,
  salesThreshold: undefined,
  postCount: undefined,
  postPeriod: undefined,
  isTimeBound: false,
  expiryDate: undefined,
} as const
