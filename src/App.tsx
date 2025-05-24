import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import ProjectCozyma from './pages/ProjectCozyma'
import ProjectGS from './pages/ProjectGS'
import ProjectNH from './pages/ProjectNH'
import ProjectWrap from './pages/ProjectWrap'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/project/cozyma" element={<ProjectCozyma />} />
          <Route path="/project/gs" element={<ProjectGS />} />
          <Route path="/project/nhcharge" element={<ProjectNH />} />
          <Route path="/project/wrapstudio" element={<ProjectWrap />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
