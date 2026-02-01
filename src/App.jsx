import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import SearchPage from './pages/SearchPage'
import ChampionPage from './pages/ChampionPage'
import IntroPages from './pages/IntroPages'
import './App.css'

function App() {
  

  return (
    <>
    
      <Router>
        <Routes>
          <Route path='/' element={<IntroPages/>} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/search' element={<SearchPage/>} />
          <Route path='/champions' element={<ChampionPage/>} />
        </Routes>
      </Router>
   
     
      
    </>
  )
}

export default App
