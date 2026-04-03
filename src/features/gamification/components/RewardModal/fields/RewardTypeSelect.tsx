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
import { REWARD_TYPE_OPTIONS } from "@/features/gamification/constants/reward.constants";
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
      name="rewardType"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Reward event *</FormLabel>
          <FormControl>
            <Select
              onValueChange={field.onChange}
              value={field.value}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select an event" />
              </SelectTrigger>
              <SelectContent>
                {REWARD_TYPE_OPTIONS.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
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