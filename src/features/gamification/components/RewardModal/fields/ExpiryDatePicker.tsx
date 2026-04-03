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
        <FormItem className="flex flex-col">
          <FormLabel>Expiry date *</FormLabel>
          <Popover>
            <FormControl>
              <PopoverTrigger asChild>
                <Button
                  type="button"
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !field.value && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 size-4" />
                  {field.value ? format(field.value, "PPP") : "Pick a date"}
                </Button>
              </PopoverTrigger>
            </FormControl>
            <PopoverContent className="w-auto p-0" align="start">
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
          <FormDescription>
            Reward will automatically stop after this date.
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
