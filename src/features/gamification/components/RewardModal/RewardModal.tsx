"use client"

import { useEffect } from "react"

import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { REWARD_SUCCESS_AUTO_CLOSE_MS } from "@/features/gamification/constants/reward.constants"
import { useRewardFlow } from "@/features/gamification/hooks/useRewardFlow"
import { closeRewardModal } from "@/features/gamification/store/gamification.slice"

import { RewardForm } from "./RewardForm"
import { RewardSuccess } from "./RewardSuccess"

export function RewardModal() {
  const dispatch = useAppDispatch()
  const open = useAppSelector((state) => state.gamification.isRewardModalOpen)
  const flow = useRewardFlow()

  useEffect(() => {
    if (flow.status !== "success") {
      return
    }

    const timeoutId = window.setTimeout(() => {
      flow.reset()
      dispatch(closeRewardModal())
    }, REWARD_SUCCESS_AUTO_CLOSE_MS)

    return () => window.clearTimeout(timeoutId)
  }, [dispatch, flow])

  function handleClose() {
    flow.reset()
    dispatch(closeRewardModal())
  }

  function handleOpenChange(nextOpen: boolean) {
    if (!nextOpen) {
      handleClose()
      return
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent
        className="h-auto w-[400px] max-w-[calc(100%-2rem)] gap-3 overflow-hidden rounded-[12px] p-6 sm:max-w-[400px]"
        showCloseButton={flow.status !== "submitting"}
      >
        <DialogHeader>
          <DialogTitle>
            {flow.status === "success" ? "Reward ready" : "Create your reward system"}
          </DialogTitle>
        </DialogHeader>

        {flow.status === "success" ? (
          <RewardSuccess onClose={handleClose} />
        ) : (
          <RewardForm errorMessage={flow.errorMessage} onCancel={handleClose} />
        )}
      </DialogContent>
    </Dialog>
  )
}