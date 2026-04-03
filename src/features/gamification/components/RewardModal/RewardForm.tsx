"use client"

import { Button } from "@/components/ui/button"
import { FormProvider } from "react-hook-form"
import type { SubmitHandler } from "react-hook-form"
import { useRewardForm } from "@/features/gamification/hooks/useRewardForm"

import { ExpiryDatePicker } from "@/features/gamification/components/RewardModal/fields/ExpiryDatePicker"
import { PointsInput } from "@/features/gamification/components/RewardModal/fields/PointsInput"
import { RewardTypeSelect } from "@/features/gamification/components/RewardModal/fields/RewardTypeSelect"
import { TimeBoundToggle } from "@/features/gamification/components/RewardModal/fields/TimeBoundToggle"
import type { RewardFormValues } from "@/features/gamification/types/reward.types"

type RewardFormProps = {
  errorMessage: string | null
  onCancel: () => void
  onSubmitStart: () => void
  onSubmitError: (message: string) => void
  onSuccess: () => void
}

export function RewardForm({
  errorMessage,
  onCancel,
  onSubmitError,
  onSubmitStart,
  onSuccess,
}: RewardFormProps) {
  const { form, isTimeBound, submitReward } = useRewardForm()

  const onSubmit: SubmitHandler<RewardFormValues> = async (values) => {
    onSubmitStart()
    const result = await submitReward(values)

    if (result.ok) {
      onSuccess()
      return
    }

    onSubmitError(result.errorMessage)
  }

  const handleSubmit = form.handleSubmit(onSubmit)

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit} className="space-y-5">
        <RewardTypeSelect control={form.control} />
        <PointsInput control={form.control} />
        <TimeBoundToggle control={form.control} />

        {isTimeBound && <ExpiryDatePicker control={form.control} />}

        {errorMessage && (
          <p className="rounded-md border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive">
            {errorMessage}
          </p>
        )}

        <div className="flex justify-between gap-3 pt-2">
          <Button
            type="button"
            variant="outline"
            className="w-full"
            onClick={onCancel}
            disabled={form.formState.isSubmitting}
          >
            Cancel
          </Button>

          <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? "Creating..." : "Create Reward"}
          </Button>
        </div>
      </form>
    </FormProvider>
  )
}