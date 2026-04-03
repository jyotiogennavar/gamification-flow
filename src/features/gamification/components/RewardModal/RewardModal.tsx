"use client"

import { useEffect } from "react"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { REWARD_SUCCESS_AUTO_CLOSE_MS } from "@/features/gamification/constants/reward.constants"
import { useRewardFlow } from "@/features/gamification/hooks/useRewardFlow"

import { RewardForm } from "./RewardForm"
import { RewardSuccess } from "./RewardSuccess"

type RewardModalProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function RewardModal({ open, onOpenChange }: RewardModalProps) {
  const flow = useRewardFlow()

  useEffect(() => {
    if (flow.status !== "success") {
      return
    }

    const timeoutId = window.setTimeout(() => {
      flow.reset()
      onOpenChange(false)
    }, REWARD_SUCCESS_AUTO_CLOSE_MS)

    return () => window.clearTimeout(timeoutId)
  }, [flow, onOpenChange])

  function handleClose() {
    flow.reset()
    onOpenChange(false)
  }

  function handleOpenChange(nextOpen: boolean) {
    if (!nextOpen) {
      handleClose()
      return
    }

    onOpenChange(true)
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md" showCloseButton={flow.status !== "submitting"}>
        <DialogHeader>
          <DialogTitle>
            {flow.status === "success" ? "Reward ready" : "Create your reward system"}
          </DialogTitle>
        </DialogHeader>

        {flow.status === "success" ? (
          <RewardSuccess onClose={handleClose} />
        ) : (
          <RewardForm
            errorMessage={flow.errorMessage}
            onCancel={handleClose}
            onSubmitStart={flow.startSubmission}
            onSubmitError={flow.markError}
            onSuccess={flow.markSuccess}
          />
        )}
      </DialogContent>
    </Dialog>
  )
}