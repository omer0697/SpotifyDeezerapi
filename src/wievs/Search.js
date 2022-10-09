import { useEffect, useState } from "react"
import SongItem from "../SongItem";

const url = 'https://deezerdevs-deezer.p.rapidapi.com/search?q=';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '210944a851msha72bda890597938p1fb37bjsn2026402859bc',
    'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
  }
};

function Search(){
    const [inputValue,setInputValue]= useState("");
    const [Infos,setinfos]=useState([]);

    
    console.log(Infos);
    function SubmitHandle(e){
        e.preventDefault();
    }
    



    useEffect(() => {
        let timer = setTimeout(() => {
            fetch(url+inputValue,options)
            .then(res => res.json())
            .then(data => setinfos(data.data))
            .catch(err => console.error('error:' + err))
      }, 2000);
    
      return () => clearTimeout(timer)
      }, [inputValue]);


    
 

    return (
        <div class="mr-auto ml-4 relative">
            <label for="search-input" class="text-black w-12 h-10 flex items-center justify-center absolute top-0 left-0">
                <svg viewBox="0 0 512 512" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M349.714 347.937l93.714 109.969-16.254 13.969-93.969-109.969q-48.508 36.825-109.207 36.825-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 37.841-14.73 71.619t-40.889 58.921zM224 377.397q43.428 0 80.254-21.461t58.286-58.286 21.461-80.254-21.461-80.254-58.286-58.285-80.254-21.46-80.254 21.46-58.285 58.285-21.46 80.254 21.46 80.254 58.285 58.286 80.254 21.461z" fill="currentColor" fill-rule="evenodd">

                    </path>
                    </svg>
                    </label>
                    <form onSubmit={SubmitHandle}>
                        <input type="text" id="search-input" class="h-10 pl-12 outline-none text-black font-medium bg-white rounded-3xl text-sm placeholder-black/50 max-w-full w-[22.75rem]" placeholder="Sanatçılar, şarkılar veya podcast'ler" onChange={e => setInputValue(e.target.value)}   / >
                    </form>
                    <div className="grid grid-cols-5 gap-x-6 ">
                       {Infos && Infos.map((item)=>(
                        <SongItem item={item}></SongItem>
                    )) }   
                         


                    </div>
                       
        </div>
    )
}

export default Search