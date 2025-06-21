import { Link, NavLink } from "react-router-dom"

const Navbar=()=>{

    return(
        <nav className="bg-gray-800 text-white p-4 flex gap-6 justify-center">
            <NavLink to='/' 
                className={({isActive})=> 
                    isActive ? "text-yellow-400 font-semibold" : "hover:text-yellow-400"}>Home</NavLink>
            <NavLink to='/about' 
                className={({isActive})=> isActive ? "text-yellow-400 font-semibold" : "hover:text-yellow-400" }>About</NavLink>
            <NavLink to='/myprojects' 
                className={({isActive})=> isActive ? "text-yellow-400 font-semibold" : "hover:text-yellow-400" }>Projects</NavLink>
            <NavLink to='/contact' 
                className={({isActive})=> isActive ? "text-yellow-400 font-semibold" : "hover:text-yellow-400" }>Contact</NavLink>
            {/* <Link to='/skills' className="hover:text-yellow-400">Skills</Link> */}
        </nav>
    )
}
export default Navbar