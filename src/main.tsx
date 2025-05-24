import { createRoot } from 'react-dom/client'
import './index.css'
import './font.css'
import App from './App.tsx'
import 'locomotive-scroll/dist/locomotive-scroll.css'

createRoot(document.getElementById('root')!).render(<App />)
