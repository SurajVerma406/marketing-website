import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Footer from './components/Footer';

import Branding from './components/Branding';
import DigitalMarketing from './components/DigitalMarketing';
import SeoServices from './components/SeoServices';
import SocialMedia from './components/SocialMedia';
import BlogDetails from './components/BlogDetails';
import ContextState from './context/ContextState';

function App() {
    return (
        <HashRouter>
            <ContextState>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/blog' element={<Blog />} />
                    <Route path='/blog-details' element={<BlogDetails />} />
                    <Route path='/branding' element={<Branding />} />
                    <Route path='/digital-marketing' element={<DigitalMarketing />} />
                    <Route path='/seo-services' element={<SeoServices />} />
                    <Route path='/social-media' element={<SocialMedia />} />
                    <Route path="*" element={<div>Page Not Found</div>} />
                </Routes>
                <Footer />
            </ContextState>
        </HashRouter>
    );
}

export default App;
