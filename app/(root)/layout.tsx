import React from 'react'

function layout({ children }: { children: React.ReactNode }) {
    return (
        <main>
            {children}
        </main>
    )
}

export default layout
