import { HeadContent, Outlet, createRootRoute } from '@tanstack/react-router'

import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

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
