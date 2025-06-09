import ThemeToggler from "./components/ThemeToggler"
import { LayoutProps } from "./types/page"



export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-end">
          <ThemeToggler />
        </div>
        {children}
      </div>
    </div>
  )
} 