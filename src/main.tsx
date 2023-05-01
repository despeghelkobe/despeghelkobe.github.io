import React from 'react'
import ReactDOM from 'react-dom/client'

import './assets/tailwind.css'
import App from './screens'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
