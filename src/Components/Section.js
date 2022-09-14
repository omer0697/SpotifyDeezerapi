import {NavLink} from "react-router-dom";
import { Icon } from "../Icons"
import SongItem from "../SongItem";

function Section({ title , more:boolean= false, items}) {

    return (
        <section>
                <header className="flex items-center justify-between">
                    <h3 className="text-2xl text-white font-semibold tracking-tight">{title}</h3>
                    
                </header>
                <br></br>
                <hr></hr>
                <div className="grid grid-cols-5 gap-x-6 ">
                    {items && 
                    items.map((item)=>(
                        <SongItem item={item} key={item.id} ></SongItem>
                    ))}

                </div>    
        </section>
    )
}

export default Section