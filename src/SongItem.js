import { Icon } from "./Icons"
import  {useDispatch, useSelector } from "react-redux"
import {  setCurrent } from "./stores/player"

function SongItem({item }) {

    const dispatch = useDispatch()
    const {current,playing,controls } = useSelector(state => state.player )
    const updateCurrent = () =>{
        if (current.id === item.id){
            if (playing) {
                controls.pause()
            }else{
                controls.play()
            }
        } else {
            dispatch(setCurrent(item))
        }

    }
    const isCurrentItem = (current?.id === item.id && playing);


    return(
        
        <div key={item.id} className="bg-footer p-4 rounded hover:bg-active group ">
        <div className="pt-[100%] relative mb-4" >
            <img src={item.album.cover_big} className="absolute inset-0 object-cover w-full h-full" ></img>
            <button 
            onClick={updateCurrent}
            className={`w-10 h-10 rounded-full bg-primary absolute group-hover:flex group-focus:flex bottom-10 right-2 flex items-center justify-center ${!isCurrentItem ? "hidden" : "flex" }`}>
                <Icon name={isCurrentItem ? "pause" : "play"} size={16}></Icon>
            </button>
        </div>
        <div className="overflow-hidden overflow-ellipsis whitespace-nowrap text-base font-semibold">
        {item.artist.name}
        <br></br>
        <h6 className="line-clamp-2 text-link text-sm mt-1" >{item.title}</h6>
        </div>

    </div>
    )
}

export default SongItem