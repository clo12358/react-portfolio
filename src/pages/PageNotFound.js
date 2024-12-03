import { useLocation, useNavigate } from 'react-router-dom';

const PageNotFound = () => {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-accent px-6 sm:px-12 md:px-20 py-16 flex flex-col items-center gap-12 text-center">
            {/* Hero Section */}
            <div className="flex flex-col items-center gap-6">
                <h1 className="text-primary text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-handwriting">
                    Oops!
                </h1>
                <p className="text-secondary-content text-xl sm:text-2xl md:text-3xl lg:text-4xl font-handwriting">
                    We couldn’t find the page <span className="text-primary-content">"{location.pathname}"</span>.
                </p>
                <p className="text-secondary-content text-lg sm:text-xl md:text-2xl">
                    Maybe it’s lost in the code. Let’s take you back home!
                </p>
            </div>

            {/* Navigation Button */}
            <button
                className="btn btn-primary btn-md no-animation text-accent px-6 py-3 rounded-md hover:bg-primary-content hover:text-white transition-all duration-300"
                onClick={() => navigate('/')}
            >
                Take me home
            </button>
        </div>
    );
};

export default PageNotFound;
