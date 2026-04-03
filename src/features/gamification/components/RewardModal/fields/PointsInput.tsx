"use client"

import type { Control } from "react-hook-form"

import { Input } from "@/components/ui/input"
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { MAX_REWARD_POINTS, MIN_REWARD_POINTS } from "@/features/gamification/constants/reward.constants"
import type { RewardFormInput, RewardFormValues } from "@/features/gamification/types/reward.types"

type PointsInputProps = {
  control: Control<RewardFormInput, unknown, RewardFormValues>
}

export function PointsInput({ control }: PointsInputProps) {
  return (
    <FormField
      control={control}
      name="points"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Points *</FormLabel>
          <FormControl>
            <Input
              type="number"
              min={MIN_REWARD_POINTS}
              max={MAX_REWARD_POINTS}
              placeholder="Enter points"
              value={typeof field.value === "number" || typeof field.value === "string" ? field.value : ""}
              onChange={field.onChange}
              onBlur={field.onBlur}
              name={field.name}
              ref={field.ref}
            />
          </FormControl>
          <FormDescription>
            Set how many points users earn for this reward event.
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
