"use client"

import { useQuery } from "@tanstack/react-query"
import type { Skip } from "./types/skip"
import LoadingSpinner from "./components/Loading"
import ErrorState from "./components/Error"
import { fetchSkips } from "./api/skipApi"
import { UI_TEXT } from "./constants/uiText"
import { useStepper } from "./hooks/useStepper"
import Stepper from "./components/Stepper"
import SkipSelectionStep from "./components/StepperSteps/SkipSelectionStep"
import { MapPin, Trash2, Truck, Shield, Calendar, CreditCard } from "lucide-react"


function App() {
  const {
    data: skips = [],
    isLoading,
    error,
  } = useQuery<Skip[], Error>({
    queryKey: ["skips"],
    queryFn: fetchSkips,
  })

  const {
    stepIndex,
    selectedStep: selectedSkip,
    setSelectedStep: setSelectedSkip,
    handleSelectStep: handleSelectSkip,
    handleContinue,
    handleBack,
  } = useStepper(skips.map((skip) => skip.id))

  if (isLoading) {
    return <LoadingSpinner message={UI_TEXT.loading} />
  }

  if (error) {
    return <ErrorState message={error.message} onRetry={() => window.location.reload()} />
  }

  const steps = [
    {
      label: UI_TEXT.stepper.postcode,
      icon: MapPin,
      content: <div className="text-gray-400">{UI_TEXT.stepper.postcode} (disabled)</div>,
    },
    {
      label: UI_TEXT.stepper.wasteType,
      icon: Trash2,
      content: <div className="text-gray-400">{UI_TEXT.stepper.wasteType} (disabled)</div>,
    },
    {
      label: UI_TEXT.stepper.selectSkip,
      icon: Truck,
      content: (
        <SkipSelectionStep
          skips={skips}
          selectedSkip={selectedSkip}
          setSelectedSkip={setSelectedSkip}
          handleSelectSkip={handleSelectSkip}
          handleContinue={handleContinue}
          handleBack={handleBack}
        />
      ),
    },
    {
      label: UI_TEXT.stepper.permitCheck,
      icon: Shield,
      content: <div className="text-gray-400">{UI_TEXT.stepper.permitCheck}</div>,
    },
    {
      label: UI_TEXT.stepper.chooseDate,
      icon: Calendar,
      content: <div className="text-gray-400">{UI_TEXT.stepper.chooseDate}</div>,
    },
    {
      label: UI_TEXT.stepper.payment,
      icon: CreditCard,
      content: <div className="text-gray-400">{UI_TEXT.stepper.payment}</div>,
    },
  ]

  return (
 
  <Stepper
      steps={steps}
      currentStep={stepIndex}
      onBack={handleBack}
  />
 
    
  )
}

export default App
