import React, { useRef } from "react"
import Layout from "../Layout"
import { StepperProps } from "../types/stepper"
import { ChevronLeft,ArrowLeft,ArrowRight, CircleArrowOutDownRightIcon } from "lucide-react"
import { UI_TEXT } from "../constants/uiText"

const Stepper: React.FC<StepperProps & { onBack?: () => void }> = ({ steps, currentStep, onBack }) => {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollByAmount = 160 

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -scrollByAmount, behavior: "smooth" })
  }
  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: scrollByAmount, behavior: "smooth" })
  }

  return (
    <Layout>
      <div className="flex justify-start  mb-4">
        <button
          className="btn btn-icon"
          onClick={onBack}
          aria-label={UI_TEXT.buttons.back}
        >
          <ArrowLeft className="w-5 h-5" />
          <span className=" ml-1">{UI_TEXT.stepper.previous}</span>
        </button>
      </div>
     
      <div className="flex items-center gap-2 mb-6 px-2 sm:px-0">
        <button
          className="btn btn-icon mr-2 sm:mr-0 lg:hidden"
          onClick={scrollLeft}
          aria-label="Scroll left"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div ref={scrollRef} className="flex-1 overflow-x-auto scrollbar-hide">
          <div className="stepper-bar min-w-[600px] flex-nowrap flex snap-x snap-mandatory">
            {steps.map((step, idx) => {
              const Icon = step.icon
              const isActive = idx === currentStep
              const isLast = idx === steps.length - 1
              return (
                <React.Fragment key={step.label}>
                  <div className={`stepper-step snap-center px-2 sm:px-0${isActive ? " stepper-step-active" : ""}`}> 
                    <Icon className="stepper-icon" />
                    <span className="stepper-label">{step.label}</span>
                  </div>
                  {!isLast && <div className="stepper-line" />}
                </React.Fragment>
              )
            })}
          </div>
        </div>
        <button
          className="btn btn-icon ml-2 sm:ml-0 lg:hidden"
          onClick={scrollRight}
          aria-label="Scroll right"
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
      <div>{steps[currentStep].content}</div>
    </Layout>
  )
}

export default Stepper 