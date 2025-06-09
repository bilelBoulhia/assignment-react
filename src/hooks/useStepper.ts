import { useState } from "react"
import { toast } from "sonner"

export function useStepper<T = number>(steps: T[]) {

  const [stepIndex, setStepIndex] = useState(2) 

  const [selectedStep, setSelectedStep] = useState<T | null>(null)

  const handleSelectStep = (step: T) => {
    setSelectedStep(step)
  }

  const handleContinue = () => {
    toast.success(`this would navigate to the next step of course`)
  }

  const handleBack = () => {
    toast.success("this would navigate to the previous step")
  }

  const goToStep = (idx: number) => {
    toast.success(`this would navigate to the step ${idx}`)
  }

  return {
    stepIndex,
    goToStep,
    nextStep: () => handleContinue(),
    prevStep: () => handleBack(),
    selectedStep,
    setSelectedStep,
    handleSelectStep,
    handleContinue,
    handleBack,
  }
} 