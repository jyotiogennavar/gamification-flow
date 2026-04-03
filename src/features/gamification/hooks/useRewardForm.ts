import { useEffect } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, useWatch } from "react-hook-form"

import { rewardSchema } from "@/features/gamification/schemas/reward.schema"
import { createReward } from "@/features/gamification/services/reward.service"
import { DEFAULT_REWARD_FORM_VALUES } from "@/features/gamification/constants/reward.constants"
import type {
  RewardFormInput,
  RewardFormValues,
  RewardMutationResult,
} from "@/features/gamification/types/reward.types"

export function useRewardForm() {
  const form = useForm<RewardFormInput, unknown, RewardFormValues>({
    resolver: zodResolver(rewardSchema),
    defaultValues: DEFAULT_REWARD_FORM_VALUES,
  })

  const isTimeBound = Boolean(
    useWatch({
      control: form.control,
      name: "isTimeBound",
    })
  )

  useEffect(() => {
    if (!isTimeBound) {
      form.setValue("expiryDate", undefined, {
        shouldDirty: true,
        shouldTouch: true,
        shouldValidate: true,
      })
    }
  }, [form, isTimeBound])

  async function submitReward(values: RewardFormValues): Promise<RewardMutationResult> {
    try {
      await createReward(values)
      return { ok: true }
    } catch {
      return {
        ok: false,
        errorMessage: "We couldn't create the reward. Please try again.",
      }
    }
  }

  return {
    form,
    isTimeBound,
    submitReward,
  }
}
