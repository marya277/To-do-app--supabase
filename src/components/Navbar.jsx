import { useEffect } from "react";
import { useTasks } from "../context/TaskContext";
import { supabaseClient } from "../supabase/Client";
import { Link } from "react-router-dom";
import imgBrand from '../assets/img-brand.png'
const Navbar = () => {
    const { logout } = useTasks();

    useEffect(() => {
    console.log(supabaseClient.auth.user());
    }, []);

    return (
    <nav className="navbar navbar-expand-lg header-nav">
        <div className="container">
        <Link className="navbar-brand fs-2 fw-bold" to="/">
        <img  className="img-brand" src={imgBrand} />
            To-do React
        </Link>
        <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon"></span>
        </button>
        {supabaseClient.auth.user() && (
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                <a className="nav-link fw-bold" href="#!" onClick={() => logout()}>
                    Logout
                </a>
                </li>
            </ul>
            </div>
            )}
    </div>
    </nav>
    );
}

export default Navbar;
