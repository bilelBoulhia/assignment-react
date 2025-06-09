export interface Step {
    label: string
    icon: React.ElementType
    content: React.ReactNode
    disabled?: boolean
  }
  
  export interface StepperProps {
    steps: Step[]
    currentStep: number
  }