// Preparam os sistemas de rotas:
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'


// cria instânci do roteador, passa a lista de todas as rotas disponíveis;
const router = createRouter({ routeTree })


// bloco de declaração de tipos para TypeScript (ajuda o TS e IA em melhores sugestões e verificação de erros);
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
