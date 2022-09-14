import Navbar from "./Navbar"
import {Routes,Route} from "react-router-dom"
import Home from "../wievs/Home"
import Search from "../wievs/Search"
import Collection from "../wievs/Collection"



function Content(){
    return (
        <main className="flex-auto overflow-auto">
            <Navbar/>
                <div className="px-8 py-5">
                    <Routes>
                        <Route path="/" exact element={<Home />}/>
                        <Route path="/search" element={<Search />}/>
                        <Route path="/collection" element={<Collection />}/>
                    </Routes>        
                </div>
            
            
        </main>
    )
}

export default Content