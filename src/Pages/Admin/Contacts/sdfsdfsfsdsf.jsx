import React, { useEffect, useRef, useState } from 'react'
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';

import { Link } from 'react-router-dom';

import { SidenavData } from './SidenavData';
import styled from 'styled-components';
import SubMenu from './SubMenu';

const Nav = styled.div`
background: #15171c;
height: 80px;
width: 250px;
display: flex;
justify-content: flex-start;
align-items: center;
`
const NavIcon = styled(Link)`
margin-left: 2rem;
`

const Aside = styled.aside`
`
const SidebarWrap = styled.div`
width: 100%;
`

const Sidenav = (props) => {

	console.log(props)
	var aside = useRef()
	var checkbox = useRef()

	useEffect(() => {
		props.setAside(aside)
	}, [props])

	const checkboxClickHandler = (e) => {

		// if (e.target.checked === true) {
		// 	checkbox.current.setAttribute("checked", "checked")

		// } else {
		// 	checkbox.current.setAttribute("checked", "unchecked")

		// }

		// if (window.getComputedStyle(aside.current, '').display === 'block') {
		// 	aside.current.style.display = 'none'

		// } else {
		// 	aside.current.style.display = 'block'

		// }

	}

	const asideClickHandler = (e) => {
		if (e.target.closest('#sidenav') === null) {
			aside.current.style.display = 'none'
		}
	}

	const [showSidebar, setSidebar] = useState(props.showSidebar)
	const toggleSidebar = () => setSidebar(!showSidebar)

	return (
		<Aside onClick={asideClickHandler} ref={aside}>
			<div id="sidenav">
				<div className="menu" title="Close side menu" onClick={checkboxClickHandler}>

					<Nav>
						<NavIcon to="#">
							<div className="menu" title="Close side menu" onClick={toggleSidebar}>
								Hambuger
							</div>
						</NavIcon>
					</Nav>
				</div>
				<div className="brand">
					<Link to="/" className='link'>
						<img src="/images/felix11.png" />
						<span>Visit site</span>
					</Link>
				</div>

				<>
					<SidebarWrap>
						<NavIcon to="#">
							<div className="menu" title="Close side menu" onClick={toggleSidebar}>
								Close
							</div>

						</NavIcon>
						{SidenavData.map((item, index) => {
							return <SubMenu item={item} key={index} />
						})}
					</SidebarWrap>
				</>

			</div>
		</Aside>

	)
}

export default Sidenav