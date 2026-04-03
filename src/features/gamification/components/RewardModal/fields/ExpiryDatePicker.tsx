"use client"

import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import type { Control } from "react-hook-form"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import type { RewardFormInput, RewardFormValues } from "@/features/gamification/types/reward.types"

type ExpiryDatePickerProps = {
  control: Control<RewardFormInput, unknown, RewardFormValues>
}

export function ExpiryDatePicker({ control }: ExpiryDatePickerProps) {
  return (
    <FormField
      control={control}
      name="expiryDate"
      render={({ field }) => (
        <FormItem className="space-y-2">
          <FormLabel className="font-body text-sm font-normal text-[var(--card-title)]">
            Expiry date <span className="text-destructive">*</span>
          </FormLabel>
          <Popover>
            <FormControl>
              <PopoverTrigger asChild>
                <Button
                  type="button"
                  variant="outline"
                  className={cn(
                    "mt-2 h-10 w-full justify-start rounded-md px-3.5 py-2 text-left font-body text-base font-normal",
                    !field.value && "text-[var(--body-text-color)]"
                  )}
                >
                  <CalendarIcon className="mr-2 size-4" />
                  {field.value ? format(field.value, "PPP") : "Pick a date"}
                </Button>
              </PopoverTrigger>
            </FormControl>
            <PopoverContent className="w-auto p-0" align="start" side="bottom" sideOffset={6}>
              <Calendar
                mode="single"
                selected={field.value}
                onSelect={field.onChange}
                disabled={(date) => {
                  const normalizedDate = new Date(date)
                  const today = new Date()
                  normalizedDate.setHours(0, 0, 0, 0)
                  today.setHours(0, 0, 0, 0)
                  return normalizedDate <= today
                }}
                autoFocus
              />
            </PopoverContent>
          </Popover>
          <FormDescription className="text-sm text-muted-foreground">
            Reward will automatically stop after this date.
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
