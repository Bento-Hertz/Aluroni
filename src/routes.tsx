import Footer from 'components/Footer';
import MenuNav from 'components/MenuNav';
import StandardPage from 'components/StandardPage';
import About from 'pages/About';
import Dish from 'pages/Dish';
import Menu from 'pages/Menu';
import NotFound from 'pages/NotFound';
import Start from 'pages/Start';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter() {
    return (
        <main>
            <Router>
                <MenuNav />
                <Routes>
                    <Route path='/' element={<StandardPage />}>
                        <Route index element={<Start/>}/>
                        <Route path='menu' element={<Menu />}/>
                        <Route path='about' element={<About />}/>
                    </Route>
                    <Route path='dish/:id' element={<Dish />}/>
                    <Route path='*' element={<NotFound />}/>
                </Routes>
                <Footer />
            </Router>
        </main>
    );
}