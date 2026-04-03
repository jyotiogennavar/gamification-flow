"use client"

import type { Control } from "react-hook-form"
import { useWatch } from "react-hook-form"

import { Input } from "@/components/ui/input"
import {
  FormControl,
  FormField,
  FormItem,
  FormDescription,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  MAX_REWARD_VALUE,
  MIN_REWARD_VALUE,
} from "@/features/gamification/constants/reward.constants"
import type {
  RewardEvent,
  RewardFormInput,
  RewardFormValues,
} from "@/features/gamification/types/reward.types"

type PointsInputProps = {
  control: Control<RewardFormInput, unknown, RewardFormValues>
}

type NumericFieldProps = {
  control: Control<RewardFormInput, unknown, RewardFormValues>
  name: "salesThreshold" | "postCount" | "postPeriod"
  label: string
  prefix?: string
  placeholder: string
}

function NumericField({ control, name, label, prefix, placeholder }: NumericFieldProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="space-y-2">
          <FormLabel className="font-body text-sm font-normal text-[var(--card-title)]">
            {label}
          </FormLabel>
          <FormControl>
            <div className="relative">
              {prefix ? (
                <span className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-base text-[var(--body-text-color)]">
                  {prefix}
                </span>
              ) : null}
              <Input
                type="number"
                min={MIN_REWARD_VALUE}
                max={MAX_REWARD_VALUE}
                placeholder={placeholder}
                className="h-10 rounded-md px-3.5 py-2 font-body text-base font-normal placeholder:text-[var(--body-text-color)]"
                style={prefix ? { paddingLeft: "2rem" } : undefined}
                value={typeof field.value === "number" || typeof field.value === "string" ? field.value : ""}
                onChange={field.onChange}
                onBlur={field.onBlur}
                name={field.name}
                ref={field.ref}
              />
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

function renderEventFields(
  rewardEvent: RewardEvent | undefined,
  control: Control<RewardFormInput, unknown, RewardFormValues>
) {
  if (!rewardEvent) {
    return null
  }

  if (rewardEvent === "sales_threshold") {
    return (
      <NumericField
        control={control}
        name="salesThreshold"
        label="Cross $X in sales"
        prefix="$"
        placeholder="e.g. 100"
      />
    )
  }

  if (rewardEvent === "posting_frequency") {
    return (
      <div className="space-y-3">
        <NumericField
          control={control}
          name="postCount"
          label="Posts X times"
          placeholder="e.g. 10"
        />
        <NumericField
          control={control}
          name="postPeriod"
          label="Every Y period"
          placeholder="e.g. 7"
        />
        <FormDescription className="text-xs text-muted-foreground">
          Use numbers to define frequency, e.g. 10 posts every 7 days.
        </FormDescription>
      </div>
    )
  }

  return (
    <div className="space-y-2">
      <p className="font-body text-sm font-normal text-[var(--card-title)]">Is Onboarded</p>
      <p className="text-xs text-muted-foreground">
        This event does not require additional numeric input.
      </p>
    </div>
  )
}

export function PointsInput({ control }: PointsInputProps) {
  const rewardEvent = useWatch({
    control,
    name: "rewardEvent",
  })

  return renderEventFields(rewardEvent, control)
}
