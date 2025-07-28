import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// 导入i18n配置
import './i18n'

// 清除localStorage中的语言设置，确保默认使用英文
localStorage.removeItem('i18nextLng')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
