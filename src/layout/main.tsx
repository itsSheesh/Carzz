// ========== packages ========== \\
import React, { ReactNode } from "react"

const MainLayout: React.FC<{ children: ReactNode}> = ( { children } ) => {
  return (
    <main className="h-screen">
        {children}
    </main>
  )
}

export default MainLayout