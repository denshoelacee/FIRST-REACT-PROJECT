import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import App from './layouts/App.jsx'
<script src="https://unpkg.com/@tailwindcss/browser@4"></script>

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
