import React, { useEffect, useRef } from 'react'

import { Link } from 'react-router-dom';

import { SidenavData } from './SidenavData';
import styled from 'styled-components';
import SubMenu from './SubMenu';

const Aside = styled.aside`
`
const SidebarWrap = styled.ul`
width: 100%;
`
const Sidenav = (props) => {

	var aside = useRef()
	var checkbox = useRef()

	useEffect(() => {
		props.setAside(aside)
	}, [props])

	const checkboxClickHandler = (e) => {

		if (e.target.checked === true) {
			checkbox.current.setAttribute("checked", "checked")

		} else {
			checkbox.current.setAttribute("checked", "unchecked")

		}

		if (window.getComputedStyle(aside.current, '').display === 'block') {
			aside.current.style.display = 'none'

		} else {
			aside.current.style.display = 'block'

		}

	}

	const asideClickHandler = (e) => {
		if (e.target.closest('#sidenav') === null) {
			aside.current.style.display = 'none'
		}
	}

	return (
		<Aside onClick={asideClickHandler} ref={aside}>
			<div id="sidenav">
				<div className="menu" title="Close side menu" onClick={checkboxClickHandler}>
					<input type="checkbox" className="toggler" ref={checkbox} />
					<div className="hambuger"><div></div></div>
				</div>
				<div className="brand">
					<Link to="/" className='link'>
						<img src="/images/felix11.png" alt="" />
						<span>Visit site</span>
					</Link>
				</div>
				<div className="items">
				<SidebarWrap>
					{SidenavData.map((item, index) => {
						return <SubMenu item={item} key={index} />
					})}
				</SidebarWrap>
				</div>
			</div>
		</Aside>
	)
}

export default Sidenav