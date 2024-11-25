import {  Link  } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-accent">
            {/* LinkedIn Button */}
            <div className="flex-1">
                {/* Logo Image */}
            <div className="w-12 rounded">
                <img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                alt="Tailwind-CSS-Avatar-component" />
            </div>
                <Link to={`https://www.linkedin.com/in/chloe-dwyer-548b42272/`}>
                    <button className="btn no-animation btn-accent text-primary hover:bg-primary hover:text-accent active:bg-primary-content">LinkedIn</button>
                </Link>
            </div>
            <div className='gap-2'>
                {/* Projects Button */}
                <div>
                    <Link to={"/projects"}>
                        <button className="btn no-animation btn-accent text-primary hover:bg-primary hover:text-accent active:bg-primary-content">Projects</button>
                    </Link>
                </div>
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto bg-accent" />
                </div>
                {/* Contact Me Button */}
                <div>
                    <button className="btn no-animation btn-accent text-primary hover:bg-primary hover:text-accent active:bg-primary-content">Contact Me</button>
                </div>
            </div>

        </div>
    );
};

export default Navbar;