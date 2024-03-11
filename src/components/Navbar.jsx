
import { NavLink } from "react-router-dom"
import mylogo from '../Assets/mylogo.png.png'
import '../components/Navbar.css'
export function Navbar(){
    return (
        <div> 
            <div className="nav-holder">
                <div className="logo"><img src={mylogo} alt="" /></div>
                
                <div className="nav-container">
                    <div><NavLink className="nav" to='/'><p>Home</p></NavLink></div>
                    <div><NavLink className="nav" to='/popular'><p>Popular</p></NavLink></div>
                    <div><NavLink className="nav" to='/upcoming'><p>Upcoming</p></NavLink></div>
                    <div><NavLink className="nav" to='/toprated'><p>TopRated</p></NavLink></div>
                    </div>
            </div>
            </div>

    )
}

