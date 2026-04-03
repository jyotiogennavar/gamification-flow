import { CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"

type RewardSuccessProps = {
  onClose: () => void
}

export function RewardSuccess({ onClose }: RewardSuccessProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-10 text-center">
      <CheckCircle2 className="size-9 text-green-600" />
      <div className="text-lg font-medium">Reward Created</div>
      <p className="text-sm text-muted-foreground">
        Your reward has been successfully configured.
      </p>
      <Button type="button" onClick={onClose} className="mt-2">
        Done
      </Button>
    </div>
  )
}