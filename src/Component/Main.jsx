import React,{useState,useEffect} from "react";

import StoryCard from "./StoryCard";

function Main(){
    const [data, setData] = useState([]);
    const [slice,setSlice] = useState(5);
    const [storyData,setStoryData] = useState("new")
    

    useEffect(()=>{
         let fetchData = async() => {
            let response = await fetch(`https://hacker-news.firebaseio.com/v0/${storyData}stories.json`)
            let result = await response.json();

            setData(result)
            
         }

         fetchData();
    }, [storyData]);

    const handleSlice = () =>{
        setSlice(previousSlice => previousSlice + 5)
    }
    const handlePastChange = () =>{
        setStoryData("top");
        let newBtn =document.getElementsByClassName("btn")[0];
        let pastBtn =document.getElementsByClassName("btn")[1];
        pastBtn.classList.add("newBtn");
        newBtn.classList.remove("newBtn")
    }
    const handleNewChange = () =>{
        setStoryData("new");
        let newBtn =document.getElementsByClassName("btn")[0];
        let pastBtn =document.getElementsByClassName("btn")[1];
        pastBtn.classList.remove("newBtn")
        newBtn.classList.add("newBtn")
    }

    return(
        <div className="main">
            <div style={{textAlign:"center"}}>
                <button className="btn newBtn " onClick={handleNewChange}>New</button>
                <button className="btn "onClick={handlePastChange}>Best</button>
            </div>
            <div className = "news-content skeleton-loader">
                {
                data.slice(0, slice).map(id => <StoryCard key={id} storyId={id} />)
                }
            </div>
            <div style={{textAlign:"center"}}>
                <button className="btn sliceBtn" onClick={handleSlice}  >Read More...</button>
            </div>
        </div>
    )
}
export default Main