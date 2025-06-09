import React from "react"
import SkipCard from "./SkipCard"
import type { SkipGridProps } from "../types/skip"



const SkipGrid: React.FC<SkipGridProps> = ({ skips, selectedSkipId, onSelect }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
    {skips.map((skip) => (
      <SkipCard
        key={skip.id}
        skip={skip}
        isSelected={selectedSkipId === skip.id}
        onSelect={() => onSelect(skip.id)}
      />
    ))}
  </div>
)

export default SkipGrid 