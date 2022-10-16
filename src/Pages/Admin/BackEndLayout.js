import AdminNavbar from '../../Components/Admin/Navbar/Navbar';
import AdminFooter from '../../Components/Admin/Footer/Footer';
import Sidenav from '../../Components/Admin/Sidebar/Sidenav';
import { Outlet } from 'react-router-dom';
import '../../assets/css/admin-styles.css'
import { useState } from 'react';

const BackEndLayout = ({ toggleMenu, menuListStyle }) => {

  const [aside, setAside] = useState(null)
  const [showSidebar, setShowSidebar] = useState(false)
    return (
        <div className='container back-end' onClick={() => toggleMenu('close')}>
          <Sidenav showSidebar={showSidebar} setAside={setAside} />
          <section>
            <AdminNavbar toggleMenu={toggleMenu} menuListStyle={menuListStyle} aside={aside} setShowSidebar={setShowSidebar} />
            <main>
              <Outlet />
            </main>
            <AdminFooter />
          </section>
        </div>
      )
}

  export default BackEndLayout