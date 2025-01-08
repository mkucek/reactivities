import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'semantic-ui-css/semantic.min.css'
import './app/layout/styles.css'
import { router } from './app/router/Routes'
import { store, StoreContext } from './app/stores/store.ts'
import { RouterProvider } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StoreContext.Provider value={store}>
    <RouterProvider router={router}/>
    </StoreContext.Provider>
  
  </StrictMode>,
)
