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
        <FormItem className="flex items-start justify-between gap-4 space-y-0 pt-1">
          <div className="space-y-1 pr-2">
            <FormLabel className="font-body text-sm font-normal text-[var(--card-title)]">Make the reward time bound</FormLabel>
            <FormDescription className="text-sm text-muted-foreground text-[12px]">
              Choose an end date to stop this reward automatically.
            </FormDescription>
          </div>

          <FormControl>
            <Switch
              checked={field.value}
              onCheckedChange={field.onChange}
              className="data-checked:bg-[var(--primary)]"
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
}