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
                    <FaIcons.FaBars className="bars" onClick={showSidebar}/>
            </div>
            <nav className={sideBar ? "navMenuActive" : "navmenu"}>
                <div className="menuCross">
                    <AiIcons.AiOutlineClose onClick={showSidebar} className="cross"/>
                </div>
                <ul className="navMenuItems">
                    {NavBarData.map((item, index) => {
                        return(
                            <li key={index}>
                                <HashLink onClick={showSidebar} to={item.path} smooth>
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