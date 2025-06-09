import React from "react"
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerClose, DrawerFooter, DrawerDescription } from "./ui/drawer"
import { ArrowRight } from "lucide-react"
import type { SelectedSkipDrawerProps} from "../types/skip"

const SelectedSkipDrawer: React.FC<SelectedSkipDrawerProps> = ({ open, skip, onClose,Back, onContinue, uiText }) => {
  if (!skip) return null
  
  return (
    <Drawer open={open} onOpenChange={(open) => !open && onClose()}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{uiText.title}</DrawerTitle>
          <DrawerDescription>
            <p className="drawer-desc">{uiText.description}</p>
          </DrawerDescription>
        </DrawerHeader>
        <div className="drawer-selected-container">
          <div className="drawer-selected-bg">
            <div className="drawer-selected-inner">
              <div className="flex items-center">
                <div>
                  <span className="drawer-selected-label">Selected:</span>
                  <span className="drawer-selected-name">{skip.name}</span>
                </div>
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={()=>!!Back && onClose()}
                  className="drawer-btn-back"
                >
                  {uiText.buttons.back}
                </button>
                <button
                  onClick={onContinue}
                  className="drawer-btn-continue"
                >
                  {uiText.buttons.continue}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <button
              onClick={onClose}
              className="drawer-btn-close"
            >
              {uiText.close}
            </button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default SelectedSkipDrawer 