import React from 'react'

// import { hyeji } from "react-icons/si";

import { headerMenus, searchKeyword, snsLink } from "../../data//header";
import { Link } from 'react-router-dom';



const Header = () => {
    return (
        <header id='header' role='banner'>
            <h1 className='header__logo'>
                <a href="/">
                    <em></em>
                    <span>popular spot<br /><i>youtube</i></span>
                </a>
            </h1>

            <nav className='header__menu'>
                <ul className='menu'>
                    {headerMenus.map((menu, key) => (
                        <li key={key}>
                            <Link to={menu.src}>
                                {menu.icon}<span>{menu.title}</span>
                            </Link>
                        </li>
                    ))}
                </ul>

                <ul className='keyword'>
                    {searchKeyword.map((keyword, key) => (
                        <li key={key}>
                            <Link to={keyword.src}>
                                {keyword.icon}<span>{keyword.title}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className='header__sns'>
                <ul className='sns'>
                    {snsLink.map((sns, key) => (
                        <li key={key}>
                            <li>
                                <a href={sns.url} target="_blank" rel="noopener noreferrer" aria-label={sns.title}>
                                    <span>{sns.icon}</span>
                                </a>
                            </li>
                        </li>
                    ))}
                    {/* <li><a href="/">aa</a></li> */}
                </ul>
            </div>
        </header >
    )
}
export default Header