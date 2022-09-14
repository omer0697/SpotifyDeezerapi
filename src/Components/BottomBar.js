import Player from "./Player/Player"

function BottomBar(){
    return (
        <div className = "h-24 bg-footer border-t border-white border-opacity-5 ">
            <Player></Player>
        </div>
    )
}

export default BottomBar