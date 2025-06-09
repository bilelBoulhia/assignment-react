export interface Skip {
  id: number
  name: string
  size: string
  price: number
  hirePeriod: number
  image: string
}

export interface SkipGridProps {
  skips: Skip[]
  selectedSkipId: number | null
  onSelect: (id: number) => void
}

export interface SelectedSkipDrawerProps {
  open: boolean
  skip: Skip | undefined
  onClose: () => void
  Back: boolean
  onContinue: () => void
  uiText: {
    title: string
    description: string
    buttons: { back: string; continue: string }
    close: string
  }
}

export interface SkipCardProps {
  skip: Skip
  isSelected: boolean
  onSelect: () => void
}
