import { RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import { router } from './router'

import { Provider } from 'react-redux'
import { store } from './state'

import { GoogleOAuthProvider } from '@react-oauth/google'

import './index.css'

createRoot(document.getElementById('root')!).render(
  <GoogleOAuthProvider clientId={import.meta.env.VITE_CLIENT_ID}>
    <Provider store={store}> 
        <StrictMode>
          <RouterProvider router={router} />
        </StrictMode>
    </Provider>
  </GoogleOAuthProvider>
)
