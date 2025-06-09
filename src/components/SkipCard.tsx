"use client"

import type React from "react"

import { useState } from "react"
import { Check } from "lucide-react"
import { SkipCardProps } from "../types/skip"



const SkipCard: React.FC<SkipCardProps> = ({ skip, isSelected, onSelect }) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div
            className={`card ${isSelected ? "card-selected" : "card-unselected"}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onSelect}
        >
            <div className="card-image">
                <div
                    className={`card-gradient ${isHovered || isSelected ? "opacity-70" : "opacity-40"}`}
                ></div>
                <div className="card-badge">{skip.size}</div>
                
                <div className="absolute inset-0 flex items-center justify-center bg-amber-400">
                    <div className="w-3/4 h-3/4 bg-amber-500 transform skew-y-12 rounded-md flex items-center justify-center">
                        <span className="text-amber-700 font-bold text-xs transform -skew-y-12">SKIP IMAGE</span>
                    </div>
                </div>
            </div>

            <div className="p-4 bg-white dark:bg-slate-800">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="card-title">{skip.name}</h3>
                        <p className="card-desc">{skip.hirePeriod} day hire period</p>
                    </div>
                    <div className="text-right">
                        <p className="card-price">£{skip.price}</p>
                    </div>
                </div>

                <div className="mt-4 space-y-2">
                    <div className="card-feature">
                        <span className="card-feature-dot"></span>
                        <span>some further information about the skip</span>
                    </div>
                    <div className="card-feature">
                        <span className="card-feature-dot"></span>
                        <span>Holds approx. {Number.parseInt(skip.size) * 2} bags of waste</span>
                    </div>
                   
                </div>

                <button
                    className={`card-btn ${isSelected ? "card-btn-selected" : "card-btn-unselected"}`}
                    onClick={(e) => {
                        e.stopPropagation()
                        onSelect()
                    }}
                >
                    {isSelected ? (
                        <>
                            <Check className="mr-1 h-4 w-4" />
                            Selected
                        </>
                    ) : (
                        "Select This Skip"
                    )}
                </button>
            </div>
        </div>
    )
}

export default SkipCard
