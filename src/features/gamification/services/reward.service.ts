import type { RewardFormValues } from "@/features/gamification/types/reward.types"

function wait(ms: number) {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, ms)
  })
}

export async function createReward(payload: RewardFormValues): Promise<void> {
  // Placeholder for real API integration.
  void payload
  await wait(800)
}
