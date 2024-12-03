import { useNavigate } from 'react-router-dom';
import image01 from '../images/thumbnail_image0.png';

const Home = () => {
    const navigate = useNavigate();

    return (
        <>
            {/* Hero Section */}
            <div className="min-h-screen bg-accent px-6 sm:px-12 md:px-20 py-16 flex flex-col-reverse md:flex-row items-center gap-12">
                {/* Text Section */}
                <div className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start gap-6">
                    <h1 className="text-primary text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-handwriting leading-tight">
                        Hey, I’m Chloe
                    </h1>
                    <p className="text-secondary-content text-lg sm:text-xl md:text-2xl lg:text-3xl font-handwriting">
                        A third-year Creative Computing student at IADT with a passion for design and development.
                    </p>
                    <button
                        className="btn btn-primary btn-md no-animation text-accent px-6 py-3 rounded-md hover:bg-primary-content hover:text-white transition-all duration-300"
                        onClick={() => navigate('/about')}
                    >
                        Get to know me ;)
                    </button>
                </div>

                {/* Image Section */}
                <div className="w-full md:w-1/2">
                    <img
                        src={image01}
                        alt="Chloe"
                        className="w-full h-auto max-h-[500px] rounded-lg shadow-lg object-cover"
                    />
                </div>
            </div>

            {/* Projects Section */}
            <div className="bg-primary px-6 sm:px-12 md:px-20 lg:px-32 py-16">
                {/* Section Title */}
                <div className="text-center mb-12">
                    <h2 className="text-accent text-3xl sm:text-4xl md:text-5xl font-handwriting">
                        Some of my projects
                    </h2>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gray-200 rounded-lg p-6 flex items-center justify-center h-60 hover:shadow-xl transition-shadow duration-300">
                        <p className="text-lg text-gray-500 font-mono">Project 1 Placeholder</p>
                    </div>
                    <div className="bg-gray-200 rounded-lg p-6 flex items-center justify-center h-60 hover:shadow-xl transition-shadow duration-300">
                        <p className="text-lg text-gray-500 font-mono">Project 2 Placeholder</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
