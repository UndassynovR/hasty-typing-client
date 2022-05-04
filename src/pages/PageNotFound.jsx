import { Link } from 'react-router-dom'
import '../css/PageNotFound.css'

function PageNotFound() {
  return (
    <div className='unselectable'>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>We couldn't find the page you are looking for.</p>
      <Link to='/'>Go to the Homepage</Link>
    </div>
  )
}
export default PageNotFound