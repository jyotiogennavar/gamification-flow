"use client";

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
} from "@/components/ui/form";

import { Switch } from "@/components/ui/switch";
import type { Control } from "react-hook-form";
import type {
  RewardFormInput,
  RewardFormValues,
} from "@/features/gamification/types/reward.types";

type Props = {
  control: Control<RewardFormInput, unknown, RewardFormValues>;
};

export function TimeBoundToggle({ control }: Props) {
  return (
    <FormField
      control={control}
      name="isTimeBound"
      render={({ field }) => (
        <FormItem className="flex items-center justify-between rounded-lg border p-3">
          <div className="space-y-0.5">
            <FormLabel>Make the reward time bound</FormLabel>
            <FormDescription>
              Choose an end date to stop this reward automatically.
            </FormDescription>
          </div>

          <FormControl>
            <Switch
              checked={field.value}
              onCheckedChange={field.onChange}
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
}