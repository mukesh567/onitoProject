
import { NavLink } from "react-router-dom"
import "./Navbar.css"


const Navbar = () => {


    return (
        <>
            <header>
                <div className="container">

                    <div className="logo-brand">
                        <NavLink to="https://mukeshportfolios.netlify.app/" >MukeshKir</NavLink>
                    </div>

                    <nav>
                        <ul>
                            <li><NavLink to="/">Register</NavLink></li>
                            <li><NavLink to="/users">Users</NavLink></li>
                        </ul>
                    </nav>

                </div>
            </header>
        </>
    )
}

export default Navbar