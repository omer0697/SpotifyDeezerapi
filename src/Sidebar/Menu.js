import { Icon } from "../Icons"
import {NavLink} from "react-router-dom"

function Menu(){
    return(
        <nav className="px-2">
            <ul className="flex flex-col">
                <li>
                   <NavLink to={"/"}  className={({ isActive }) => (isActive ? 'h-10 gap-x-4 flex items-center text-sm font-semibold text-link rounded hover:text-white px-4 bg-active text-white' : 'h-10 gap-x-4 flex items-center text-sm font-semibold text-link rounded hover:text-white px-4')}>
                    <span>
                        <Icon name="home" size={24}></Icon>
                    </span>
                    Ana Sayfa
                   </NavLink>
                </li>
                <li>
                   <NavLink  to={"/search"} className={({ isActive }) => (isActive ? 'h-10 gap-x-4 flex items-center text-sm font-semibold text-link rounded hover:text-white px-4 bg-active text-white' : 'h-10 gap-x-4 flex items-center text-sm font-semibold text-link rounded hover:text-white px-4')}>
                    <span>
                        <Icon name="search"></Icon>
                    </span>
                    Ara
                   </NavLink>
                </li>
                <li>
                   <NavLink  to={"/collection"} className={({ isActive }) => (isActive ? 'h-10 gap-x-4 flex items-center text-sm font-semibold text-link rounded hover:text-white px-4 bg-active text-white' : 'h-10 gap-x-4 flex items-center text-sm font-semibold text-link rounded hover:text-white px-4')}>
                   <span>
                        <Icon name="collection"></Icon>
                    </span>
                    Kitaplığın
                   </NavLink>
                </li>
                
            </ul>
        </nav>
    )
}

export default Menu