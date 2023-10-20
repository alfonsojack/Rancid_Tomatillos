import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
  
  return (
    <div className='header-cont'>
      <Link to="/">
      <h1>Rancid Tomatillos</h1>
      </Link>
    </div>
  )
}

export default Header