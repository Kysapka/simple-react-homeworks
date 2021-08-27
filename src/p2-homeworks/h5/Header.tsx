import React from 'react'
import s from './Header.module.css'
import {PATH} from "./Routes";
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <div className={s.header}>
            <NavLink to={PATH.PRE_JUNIOR} className={s.link} activeClassName={s.active}>pre-junior</NavLink>
            <NavLink to={PATH.JUNIOR} className={s.link} activeClassName={s.active}>junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS} className={s.link} activeClassName={s.active}>junior-plus</NavLink>
            <div className={s.block} >Menu</div>
        </div>
    )
}

export default Header
