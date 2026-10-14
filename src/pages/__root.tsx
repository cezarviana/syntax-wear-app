import { HeadContent, Outlet, createRootRoute } from '@tanstack/react-router'
import '../styles.css'
import React from 'react'

export const Route = createRootRoute({
  component: RootComponent,
  head: () => ({
    meta: [{ title: 'Home - SyntaxWear' }],
  }),
})

function RootComponent() {
  return (
    <>
      <React.Fragment>
        <HeadContent />
        <Outlet />
      </React.Fragment>
    </>
  )
}
