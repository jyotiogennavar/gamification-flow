import { z } from "zod"

import {
  MAX_REWARD_VALUE,
  MIN_REWARD_VALUE,
  REWARD_EVENTS,
  REWARD_TYPES,
} from "@/features/gamification/constants/reward.constants"

export const rewardSchema = z
  .object({
    rewardEvent: z.enum(REWARD_EVENTS, {
      error: "Reward event is required",
    }),
    rewardType: z.enum(REWARD_TYPES, {
      error: "Reward type is required",
    }),
    salesThreshold: z.coerce
      .number({
        error: "Value must be a number",
      })
      .int("Value must be a whole number")
      .min(MIN_REWARD_VALUE, "Value must be greater than 0")
      .max(MAX_REWARD_VALUE, "Value is too large")
      .optional(),
    postCount: z.coerce
      .number({
        error: "Value must be a number",
      })
      .int("Value must be a whole number")
      .min(MIN_REWARD_VALUE, "Value must be greater than 0")
      .max(MAX_REWARD_VALUE, "Value is too large")
      .optional(),
    postPeriod: z.coerce
      .number({
        error: "Value must be a number",
      })
      .int("Value must be a whole number")
      .min(MIN_REWARD_VALUE, "Value must be greater than 0")
      .max(MAX_REWARD_VALUE, "Value is too large")
      .optional(),
    isTimeBound: z.boolean().default(false),
    expiryDate: z.date({ error: "Invalid date" }).optional(),
  })
  .superRefine((data, ctx) => {
    if (data.rewardEvent === "sales_threshold" && !data.salesThreshold) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Sales amount is required.",
        path: ["salesThreshold"],
      })
    }

    if (data.rewardEvent === "posting_frequency") {
      if (!data.postCount) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Post count is required.",
          path: ["postCount"],
        })
      }

      if (!data.postPeriod) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Period value is required.",
          path: ["postPeriod"],
        })
      }
    }

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