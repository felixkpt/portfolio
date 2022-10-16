import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { Outlet } from 'react-router-dom';

const FrontEndLayout = ({ toggleMenu, menuListStyle }) => (
    <div className='front-end'>
        <Navbar toggleMenu={toggleMenu} menuListStyle={menuListStyle} />
        <div className='container' onClick={() => toggleMenu('close')}>
            <Outlet />
        </div>
        <Footer />
    </div>
)
export default FrontEndLayout