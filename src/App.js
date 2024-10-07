import {  BrowserRouter as Router, Routes, Route  } from 'react-router-dom';

//pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';
import RedirectExample from './pages/RedirectExample';
import BooksIndex from './pages/books/Index';
import BooksShow from  './pages/books/Show';

// componants
import Navbar from './componants/Navbar';

const App = () => {
    return (
        <Router>
        <Navbar />

            <Routes>
                <Route path={"/"} element={<Home />}/>
                <Route path={"/about"} element={<About />}/>
                <Route path={"/contact"} element={<Contact />}/>
                <Route path={"/redirect-example"} element={<RedirectExample />}/>

                {/* Books */}
                <Route path={"/books"} element={<BooksIndex />} />
                <Route path={"/books/:id"} element={<BooksShow />} />

                <Route path="*" element={<PageNotFound />} />
            </Routes>

        </Router>
    )
};

export default App;