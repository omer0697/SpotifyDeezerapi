import Section from "../Components/Section"

import { useState,useEffect } from "react"
const url = 'https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '210944a851msha72bda890597938p1fb37bjsn2026402859bc',
    'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
  }
};


function Home(){
    const [items,setItem] = useState([])

    useEffect(()=>{
        fetch(url, options)
	    .then(res => res.json())
        .then(items => setItem(items.data))
	    .catch(err => console.error('error:' + err));
    },[])
    console.log(items)
    return (
        <div className="grid gap-y-8">
        <Section title="Recently Played" items={items}></Section>
        </div>
    )
}

export default Home