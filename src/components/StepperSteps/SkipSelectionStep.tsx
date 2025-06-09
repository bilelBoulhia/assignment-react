import { Skip } from "../../types/skip"
import PageHeader from "../PageHeader"
import SkipGrid from "../SkipGrid"
import SelectedSkipDrawer from "../SelectedSkipDrawer"
import { UI_TEXT } from "../../constants/uiText"


interface SkipSelectionStepProps {
  skips: Skip[]
  selectedSkip: number | null
  setSelectedSkip: (id: number | null) => void
  handleSelectSkip: (id: number) => void
  handleContinue: () => void
  handleBack: () => void
}

const SkipSelectionStep: React.FC<SkipSelectionStepProps> = ({
  skips,
  selectedSkip,
  setSelectedSkip,
  handleSelectSkip,
  handleContinue,
  
}) => {
  const selected = skips.find((skip) => skip.id === selectedSkip)

  return (
    <>
     <PageHeader
        title={UI_TEXT.pages.skipSelectionPage.title}
        description={UI_TEXT.pages.skipSelectionPage.description}
      />
      <SkipGrid
        skips={skips}
        selectedSkipId={selectedSkip}
        onSelect={handleSelectSkip}
      />
      <SelectedSkipDrawer
        open={!!selected}
        Back={!!selected}
        skip={selected}
        onClose={() => setSelectedSkip(null)}
        onContinue={handleContinue}
        uiText={{
          title: UI_TEXT.drawer.title,
          description: UI_TEXT.drawer.description,
          buttons: UI_TEXT.buttons,
          close: UI_TEXT.drawer.close,
        }}
      />
    </>
  )
}

export default SkipSelectionStep 