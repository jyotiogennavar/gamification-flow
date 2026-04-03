import { z } from "zod"

import { rewardSchema } from "@/features/gamification/schemas/reward.schema"
import { REWARD_TYPES } from "@/features/gamification/constants/reward.constants"

export type RewardType = (typeof REWARD_TYPES)[number]
export type RewardFormInput = z.input<typeof rewardSchema>
export type RewardFormValues = z.output<typeof rewardSchema>

export type RewardFlowStatus = "form" | "submitting" | "success" | "error"

export type RewardMutationResult =
  | { ok: true }
  | { ok: false; errorMessage: string }
