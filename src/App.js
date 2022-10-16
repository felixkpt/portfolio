import React, { useContext, useLayoutEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import { ThemeContext } from './Context/Context';
import Home from './Pages/Home/Home';
import Skills from './Pages/Skills/Skills';
import Resume from './Pages/Resume/Resume';
import Portfolio from './Pages/Portfolio/Portfolio';
import Contact from './Pages/Contact/Contact';
import FrontEndLayout from './Pages/FrontEndLayout';

// Admin pages
import BackEndLayout from './Pages/Admin/BackEndLayout';
import Admin from './Pages/Admin'
import AdminPosts from './Pages/Admin/Posts/Posts';
import AdminPortfolio from './Pages/Admin/Portfolio/Portfolio';
import AdminResume from './Pages/Admin/Resume/Resume';
import AdminSkills from './Pages/Admin/Skills/Skills';
import AdminTestimonials from './Pages/Admin/Testimonials/Testimonials';
import AdminContacts from './Pages/Admin/Contacts/Contacts';
import Users from './Pages/Admin/Users/Users';

function App() {

  const [menuListStyle, setMenuListStyle] = useState(null)

  const toggleMenu = (closeOnly = false) => {
    if (menuListStyle === null && closeOnly !== 'close') {
      setMenuListStyle({ transform: 'translateX(0)' })
    } else {
      setMenuListStyle(null)
    }
  }
  const { state } = useContext(ThemeContext)

  const location = useLocation().pathname
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0)
  }, [location])

  return (
    <div className={`App ${state.darkMode && 'dark'}`}>
      <Routes>
        <Route path="/admin" element={BackEndLayout({ toggleMenu, menuListStyle })}>
          <Route index element={<Admin />} />
          <Route path="posts" element={<AdminPosts />} />
          <Route path="portfolio" element={<AdminPortfolio />} />
          <Route path="resume" element={<AdminResume />} />
          <Route path="skills" element={<AdminSkills />} />
          <Route path="testimonials" element={<AdminTestimonials />} />
          <Route path="contacts" element={<AdminContacts />} />
          <Route path="users" element={<Users />} />
        </Route>
        <Route path="/" element={FrontEndLayout({ toggleMenu, menuListStyle })}>
          <Route index element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
