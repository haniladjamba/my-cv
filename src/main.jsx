import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Modal from 'react-modal'
import './assets/css/style.css'
import 'aos/dist/aos.css';

Modal.setAppElement('#root')

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
