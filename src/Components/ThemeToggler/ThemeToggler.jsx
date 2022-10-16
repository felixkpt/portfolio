
import React, { useContext } from 'react'
import { ThemeContext } from '../../Context/Context'
import './ThemeToggler.css'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import CircleIcon from '@mui/icons-material/Circle';

const ThemeToggler = () => {
    const theme = useContext(ThemeContext)
    const handleToggle = () => {
        theme.dispatch({ type: 'toggle' })
    }

    return (
        <div className={`theme-toggler ${theme.state.darkMode && 'dark'}`} onClick={handleToggle} title={`Switch mode, currently ${theme.state.darkMode ? 'dark mode.': 'light mode.'}`}>
            <div><LightModeOutlinedIcon style={{width: 17}} /></div>
            <div><DarkModeOutlinedIcon style={{width: 17}} /></div>
        <div style={{width:26,height:26}}><CircleIcon style={{width: 25}} /></div>
        </div>
    )
}

export default ThemeToggler