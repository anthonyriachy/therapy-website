import { Link } from 'react-router-dom'
import  './NavBar.css'
function NavBar() {
  return (
    <nav className='main'>  
        <section className='left-section '>
            <img src="../../public/vite.svg" alt="" className   ='' />
            <h2 className=''>Name</h2>
        </section>

        {/* links */}
        <section className='flex flex-row' >
            <Link to="/" className='link' >Home</Link>
            <Link to="/therapist" className='link'>Therapistts</Link>
            <Link to="/therapist" className='link'>Therapistts</Link>
            <Link to="/therapist" className='link'>Therapistts</Link>
            <Link to="/therapist" className='link'>Therapistts</Link>
            
        </section>
    </nav>

  )
}

export default NavBar