import MainPage from './pages'
import PageNotFound from './pages/PageNotFound'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return(
    <Router>
      <Routes>
        <Route path='/'>
          <Route index element={<MainPage />} />
          <Route path='*' element={<PageNotFound />} />
        </Route>
      </Routes>
    </Router>
  )
}
export default App;