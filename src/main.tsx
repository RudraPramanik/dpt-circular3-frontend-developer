import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { FlightDataProvider } from './context/FlightDataProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FlightDataProvider>
    <App />
    </FlightDataProvider>
  </React.StrictMode>,
)
