import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
const SidebarLink = styled(Link)`
`
const SidebarLabel = styled.span`
margin-left: 16px;
`
const DropdownLink = styled(Link)`
padding-left: 3rem;
text-decoration: none;
color: #f5f5f5;
font-size: 16px;
`
const SubMenu = ({ item }) => {
  const [subNav, setSubnav] = useState(item.isOpened)
  const showSubnav = () => setSubnav(!subNav)

  const handleClickedList = (e) => {

    // Dealing with the sub menu on click too
    if (e.target.closest('.has-dropdown ul') === null) {
      if (e.currentTarget.classList.contains('selected') === false) {
        e.currentTarget.classList.add('selected', 'active')
      } else {
        e.currentTarget.classList.remove('selected', 'active')
      }
      // remove all other active lists
      document.querySelectorAll('#sidenav .items>ul>li').forEach(li => li !== e.currentTarget && li.classList.remove('selected', 'active'))

    } else {
      if (e.target.closest('li').classList.contains('selected') === false) {
        e.target.closest('li').classList.add('selected', 'active')
      } else {
        e.target.closest('li').classList.remove('selected', 'active')
      }
      // remove all other active lists
      e.target.closest('.has-dropdown ul').querySelectorAll('li').forEach(li => li !== e.target.closest('li') && li.classList.remove('selected', 'active'))
    }
  }

  return (
    <li className={`${item.subNav ? "has-dropdown" : ""} ${item.isOpened ? "active" : ""}`} onClick={handleClickedList}>
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
        <span>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </span>
        {item.subNav && <span className="caret"></span>}
      </SidebarLink>
      {item.subNav &&
        (<ul>
          {item.subNav.map((item, index) => {
            return <li key={index} className={`${item.isOpened ? "selected" : ""}`}>
              <DropdownLink to={item.path}>
                <span>
                  {item.icon}
                  <SidebarLabel>{item.title}</SidebarLabel>
                </span>
              </DropdownLink>
            </li>
          })}
        </ul>)
      }
    </li>
  )
}

export default SubMenu