import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './hooks/theme_context.tsx'
import Header from './components/header/header.tsx'
import Footer from './components/footer/footer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <Header/>
      <div className='max-w-6xl mx-auto pt-16 md:pt-20'>
        <App />
      </div>
      <Footer/>
    </ThemeProvider>
  </StrictMode>,
)
