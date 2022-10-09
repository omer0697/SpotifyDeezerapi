import SongItem from "../SongItem"

export default function LikedPage(){
    const musics = JSON.parse(localStorage.getItem("music"))
    console.log(musics)
    return(
        <div className="grid grid-cols-5 gap-x-6">
        {musics && musics.map((item,index)=>(
            <SongItem item={item} key={index}></SongItem>
        ))}
        </div>
    )
}