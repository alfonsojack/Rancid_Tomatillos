import './Header.css'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation()

  return (
    <div className='header-cont'>
      <Link to="/">
        <h1>Rancid Tomatillos</h1>
      </Link>
      {location.pathname !== "/" &&
      <Link to="/">
        <h3 className='home-button'>Home</h3>
      </Link>
      }
    </div>
  )
}

export default Header
