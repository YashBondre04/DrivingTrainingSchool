import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

function MaintenancePage() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontFamily: 'sans-serif',
      backgroundColor: '#f8f9fa',
      color: '#333',
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1>Website Temporarily Unavailable</h1>
        <p>Please contact the administrator for more details.</p>
      </div>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MaintenancePage />
  </StrictMode>,
)
