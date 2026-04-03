import { z } from "zod"

import {
  MAX_REWARD_POINTS,
  MIN_REWARD_POINTS,
  REWARD_TYPES,
} from "@/features/gamification/constants/reward.constants"

export const rewardSchema = z
  .object({
    rewardType: z.enum(REWARD_TYPES, {
      error: "Reward type is required",
    }),
    points: z.coerce
      .number({
        error: "Points must be a number",
      })
      .int("Points must be a whole number")
      .min(MIN_REWARD_POINTS, "Points must be greater than 0")
      .max(MAX_REWARD_POINTS, "Points are too large"),
    isTimeBound: z.boolean().default(false),
    expiryDate: z.date({ error: "Invalid date" }).optional(),
  })
  .superRefine((data, ctx) => {
    if (!data.isTimeBound) {
      return
    }

    if (!data.expiryDate) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Expiry date is required when time-bound is enabled.",
        path: ["expiryDate"],
      })
      return
    }

    const today = new Date()
    const selectedDate = new Date(data.expiryDate)

    today.setHours(0, 0, 0, 0)
    selectedDate.setHours(0, 0, 0, 0)

    if (selectedDate <= today) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Expiry date must be in the future.",
        path: ["expiryDate"],
      })
    }
  })