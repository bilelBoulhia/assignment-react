"use client"
import { Toaster as Sonner, ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {


  return (
    <Sonner
      richColors
      position="top-center"
      className="toaster group bg-emerald-500 dark:bg-emerald-600 text-white" 
      {...props}
    />
  )
}

export { Toaster }
