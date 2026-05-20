import { ReactNode } from 'react'
import { Squares } from "./squares-background"

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-zinc-900 flex items-center justify-center">
      <div
        className="relative overflow-hidden bg-black"
        style={{ aspectRatio: '3/4', height: '100vh', maxHeight: '100vh', maxWidth: 'calc(100vh * 3 / 4)' }}
      >
        <div className="absolute inset-0 z-10">
          <Squares
            direction="diagonal"
            speed={0.5}
            squareSize={40}
            borderColor="#333"
            hoverFillColor="#222"
          />
        </div>
        <div className="relative z-20 h-full">
          {children}
        </div>
      </div>
    </div>
  )
}