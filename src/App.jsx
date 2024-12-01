import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TreemapPage from './pages/TreemapPage.jsx'

function App() {

  return (
    <div className='bg-red-500'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TreemapPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
