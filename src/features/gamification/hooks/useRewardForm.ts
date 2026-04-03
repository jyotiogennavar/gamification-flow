import { useEffect } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, useWatch } from "react-hook-form"

import { useAppDispatch } from "@/app/hooks"
import { rewardSchema } from "@/features/gamification/schemas/reward.schema"
import { DEFAULT_REWARD_FORM_VALUES } from "@/features/gamification/constants/reward.constants"
import { submitReward as submitRewardAction } from "@/features/gamification/store/gamification.slice"
import type {
  RewardFormInput,
  RewardFormValues,
  RewardMutationResult,
} from "@/features/gamification/types/reward.types"

export function useRewardForm() {
  const dispatch = useAppDispatch()

  const form = useForm<RewardFormInput, unknown, RewardFormValues>({
    resolver: zodResolver(rewardSchema),
    defaultValues: DEFAULT_REWARD_FORM_VALUES,
    mode: "onChange",
  })

  const rewardEvent = useWatch({
    control: form.control,
    name: "rewardEvent",
  })

  const isTimeBound = Boolean(
    useWatch({
      control: form.control,
      name: "isTimeBound",
    })
  )

  useEffect(() => {
    if (rewardEvent === "sales_threshold") {
      form.setValue("postCount", undefined, {
        shouldDirty: true,
        shouldTouch: true,
        shouldValidate: true,
      })
      form.setValue("postPeriod", undefined, {
        shouldDirty: true,
        shouldTouch: true,
        shouldValidate: true,
      })
      return
    }

    if (rewardEvent === "posting_frequency") {
      form.setValue("salesThreshold", undefined, {
        shouldDirty: true,
        shouldTouch: true,
        shouldValidate: true,
      })
      return
    }

    if (rewardEvent === "onboarded") {
      form.setValue("salesThreshold", undefined, {
        shouldDirty: true,
        shouldTouch: true,
        shouldValidate: true,
      })
      form.setValue("postCount", undefined, {
        shouldDirty: true,
        shouldTouch: true,
        shouldValidate: true,
      })
      form.setValue("postPeriod", undefined, {
        shouldDirty: true,
        shouldTouch: true,
        shouldValidate: true,
      })
    }
  }, [form, rewardEvent])

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
    const resultAction = await dispatch(submitRewardAction(values))

    if (submitRewardAction.fulfilled.match(resultAction)) {
      return { ok: true }
    }

    return {
      ok: false,
      errorMessage: resultAction.payload ?? "We couldn't create the reward. Please try again.",
    }
  }

  return {
    form,
    isTimeBound,
    submitReward,
  }
}
