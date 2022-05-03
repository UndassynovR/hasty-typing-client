import MainPage from './pages'
import NotFoundPage from './pages/notfound'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return(
    <Router>
      <Routes>
        <Route path='/'>
          <Route index element={<MainPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  )
}
export default App;