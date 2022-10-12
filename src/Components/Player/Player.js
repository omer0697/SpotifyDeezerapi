import { Icon } from "../../Icons"

import CustomRange from "../CustomRange";
import {useAudio} from 'react-use';
import { secondstoTime } from "../../Utils";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setControls, setPlaying } from "../../stores/player";




function Player(){

    const dispatch = useDispatch()
    
    const {current} = useSelector(state => state.player)
    
    const [audio, state, controls] = useAudio({
        src: current?.preview,
        
      });

    useEffect(()=>{
        controls.play()
    },[current])  

    useEffect(()=>{
        dispatch(setPlaying(state.playing))
    },[state.playing])

    useEffect(()=>{
        dispatch(setControls(controls));

    },[])  
      
      

      const volumeIcon = useMemo(()=>{
        if (state.volume=== 0 || state.muted)
            return "volumeMuted"
        if (state.volume > 0 && state.volume < 0.33 )
            return "volumeLow"

        if (state.volume  >= 0.33 && state.volume < 0.66)
            return "volumeNormal"

        return "volumeFull"    
      },[state.volume,state.muted]) 

      function LikedAdd(){
        let music;
        if (localStorage.getItem("music")===null){
            music=[];
        }
        else {
            music = JSON.parse(localStorage.getItem("music"));
        }
        music.push(current);
        localStorage.setItem("music",JSON.stringify(music));
      }


    

    return (
        <div className="flex px-4 justify-between items-center h-full">
            <div className="min-w-[11.25rem] w-[30%] ">
                <div className="flex items-center ">
                    <div className="">

                        <div className="w-[3.5rem]"><img src={current ? current.album.cover : "" } alt={current ? current.id : ""}></img></div>
                        <h6 className="text-semibold">{current ? current.album.title  : ""}</h6>

                    </div >
                    <button onClick={LikedAdd} className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100 ">
                        <Icon  size={current? 16: 0}  name="heart"></Icon>
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100 ">
                        <Icon size={current? 16: 0} name="pictureInPicture"></Icon>
                    </button>
                </div>    
            </div>
            <div className="max-w-[45.125rem] w-[40%] flex flex-col items-center">
                <div className="flex items-center gap-x-2">
                    <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100 ">
                        <Icon size={16} name="shuffle"></Icon>
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100 ">
                        <Icon size={16} name="playerPrev"></Icon>
                    </button>
                    <button
                    onClick={controls[state?.playing ? "pause" : "play"]}
                     className="w-8 h-8 bg-white flex items-center justify-center text-black rounded-full hover:scale-[1.1]">
                        <Icon size={16} name={state?.playing ? "pause" : "play"}></Icon>
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100 ">
                        <Icon size={16} name="playerNext"></Icon>
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100 ">
                        <Icon size={16} name="repeat"></Icon>
                    </button>
                </div>
                <div className="w-full flex items-center gap-x-2">
                    {audio}
                    <div className="text-[0.688rem] text-white text-opacity-70">
                {secondstoTime(state?.time)}
            </div>
            <CustomRange
                step={0.1}
                min={0}
                max={state?.duration || 1 }
                value = {state?.time}
                onChange={value => controls.seek(value)}
            ></CustomRange>    
            <div className="text-[0.688rem] text-white text-opacity-70">
                {secondstoTime(state?.duration)}
            </div>


                </div>
            </div>
            
            <div className="min-w-[11.25rem] w-[30%] flex items-center justify-end">
                    <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100 ">
                        <Icon size={16} name="queue"></Icon>
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100 ">
                        <Icon size={16} name="device"></Icon>
                    </button>
                   <button 
                        onClick={controls[state.muted ?  "unmute": "mute" ]}
                        className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100 ">
                        
                        <Icon size={16} name={volumeIcon}></Icon>
                    </button>
                    <div className="w-[5.813rem] max-w-full">
                    <CustomRange
                        step={0.01}
                        min={0}
                        max={1 }
                        value = {state.muted ? 0 :state?.volume }
                        onChange={value => {
                            controls.unmute();
                            controls.volume(value)
                        }}
                    ></CustomRange>
                    </div>
                    
                    <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100 ">
                        <Icon size={16} name="fullScreen"></Icon>
                    </button>
            </div>
        </div>
    )
}

export default Player
