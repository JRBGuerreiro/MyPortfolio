import React, {useState} from 'react'
import {HashLink} from 'react-router-hash-link'
import * as AiIcons from 'react-icons/ai'
import * as FaIcons from 'react-icons/fa'
import {NavBarData} from './NavBarData'

const NavBar = () => {

    const [sideBar, setSideBar] = useState(false)

    const showSidebar = () => {
        setSideBar(!sideBar)
    }

    return(
        <>
            <div className="navbar">
                <HashLink to="#" className="menuBars">
                    <FaIcons.FaBars onClick={showSidebar}/>
                </HashLink>
            </div>
            <nav className={sideBar ? "navMenuActive" : "navmenu"}>
                <ul className="navMenuItems">
                    <li className="navbarToggle">
                        <HashLink to="#" className="menuBars">
                            <AiIcons.AiOutlineClose/>
                        </HashLink>
                    </li>
                    {NavBarData.map((item, index) => {
                        return(
                            <li key={index}>
                                <HashLink to={item.path} smooth>
                                    <span>{item.title}</span>
                                </HashLink>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}

export default NavBar