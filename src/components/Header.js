import {NavLink} from "react-router-dom";

export const Header = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <div className="navbar-brand">YourNutrition</div>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <NavLink to='/' exact className="nav-link" >Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='nutrition' className="nav-link" >Nutrition</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='productlist' className="nav-link" >ProductList</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)