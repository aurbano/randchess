import React from 'react'
import ReactDOM from 'react-dom/client'
import Board from './components/Board'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Board />
  </React.StrictMode>,
)
