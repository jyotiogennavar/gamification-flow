"use client";

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

import type { Control } from "react-hook-form";
import { REWARD_EVENT_OPTIONS } from "@/features/gamification/constants/reward.constants";
import type {
  RewardFormInput,
  RewardFormValues,
} from "@/features/gamification/types/reward.types";

type Props = {
  control: Control<RewardFormInput, unknown, RewardFormValues>;
};

export function RewardTypeSelect({ control }: Props) {
  return (
    <FormField
      control={control}
      name="rewardEvent"
      render={({ field }) => (
        <FormItem className="space-y-2">
          <FormLabel className="font-body text-sm font-normal text-[var(--card-title)]">
            Reward with <span className="text-destructive">*</span>
          </FormLabel>
          <FormControl>
            <Select
              onValueChange={field.onChange}
              value={field.value}
            >
              <SelectTrigger className="mt-2 h-10 w-full rounded-md px-3.5 font-body text-base font-normal data-[placeholder]:text-[var(--body-text-color)]">
                <SelectValue placeholder="Select a reward" />
              </SelectTrigger>
              <SelectContent
                className="rounded-md"
                position="popper"
                side="bottom"
                align="start"
                sideOffset={6}
              >
                {REWARD_EVENT_OPTIONS.map((option) => (
                  <SelectItem className="px-3 py-2" key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}