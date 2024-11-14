import {  Link  } from 'react-router-dom';

const Navbar = () => {
    return (
        // <div>
        //     <Link to={"/"} >Home</Link> |
        //     <Link to={"/about"} >About</Link> |
        //     <Link to={"/contact"} >Contact Us</Link> |
        //     <Link to={"/projects"}>Projects</Link> |
        // </div>
        <div className="navbar bg-accent">
        <div className="flex-1">
            <button className="btn btn-sm no-animation btn-accent text-primary hover:bg-primary hover:text-accent active:bg-primary-content">LinkedIn</button>
        </div>
        <div className="">
            <button className="btn btn-sm no-animation btn-accent text-primary hover:bg-primary hover:text-accent active:bg-primary-content">Projects</button>
            
            <button className="btn btn-sm no-animation btn-accent text-primary hover:bg-primary hover:text-accent active:bg-primary-content">Contact Me</button>
        </div>
</div>
    );
};

export default Navbar;