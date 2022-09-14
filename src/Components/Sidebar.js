import logo from "./img/logo.svg"
import Menu from "../Sidebar/Menu"
import { Icon } from "../Icons"
function Sidebar(){
    return (
        <aside className="w-60 py-6 flex flex-shrink-0 flex-col bg-black">
            <a href="#" className="mb-7 px-6">
                <img src={logo} className="h-10"></img>
            </a>

            <Menu></Menu>
            <nav className="mt-6">
                <ul>
                    <li>
                        <a href=""  className="py-2 px-6 flex items-center group text-sm text-link font-semibold hover:text-white">
                            <span className="w-6 h-6 flex items-center justify-center mr-4 bg-white bg-opacity-60 group-hover:bg-opacity-100 roundend-sm text-black">
                                <Icon name="plus" size="12"></Icon>
                            </span>
                            Çalma Listesi Oluştur
                        </a>
                    </li>
                    <li>
                        <a href="" className="py-2 px-6 flex items-center group text-sm text-link font-semibold hover:text-white">
                            <span className="w-6 h-6 flex items-center justify-center mr-4 bg-gradient-to-br from-indigo-500 text-white rounded-sm opacity-70 to-blue-400 group-hover:opacity-200 ">
                                <Icon name="heart" size="12"></Icon>
                            </span>
                            Beğenilen Şarkılar
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar