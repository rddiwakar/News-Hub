import React,{useState,useEffect} from "react";

import StoryCard from "./StoryCard";

function Main(){
    const [data, setData] = useState([]);
    const [slice,setSlice] = useState(5);
    const [storyData,setStoryData] = useState("new");
    const [isErrorMessage, setIsErrorMessage] =  useState("");
    
    

    useEffect(()=>{
         let fetchData = async() => {
            try{
                let response = await fetch(`https://hacker-news.firebaseio.com/v0/${storyData}stories.json`)
                let result = await response.json();

                // throw new Error("something went wrong");

                setData(result)
                
            }catch(error){
                setIsErrorMessage(error.message)
            }
            
         }

         fetchData();
    }, [storyData]);

    const handleSlice = () =>{
        setSlice(previousSlice => previousSlice + 5)
    }
    const handlePastChange = () =>{
        setStoryData("best");
        
    }
    const handleNewChange = () =>{
        setStoryData("new");
        
    }

    return(
        <>
            {isErrorMessage ? <h1>{isErrorMessage}</h1>
            :<div className="main">
                <div style={{textAlign:"center"}}>
                    <button className={ `btn ${storyData === "new" ? "newBtn" : ""}`}   onClick={handleNewChange}>New</button>
                    <button className={ `btn ${storyData === "best" ? "newBtn" : ""}`}onClick={handlePastChange}>Best</button>
                </div>
                <div className = "news-content ">
                    {
                    data.slice(0, slice).map(id => <StoryCard key={id} storyId={id} />)
                    }
                </div>
                <div style={{textAlign:"center"}}>
                    <button className="btn sliceBtn" onClick={handleSlice}  >Read More...</button>
                </div>
            </div>
            }
        </>
    )
}
export default Main