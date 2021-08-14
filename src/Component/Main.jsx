import React,{useState,useEffect} from "react";
function Main(){
    const [data, setData] = useState([])

    useEffect(()=>{
         let fetchData = async() => {
            let response = await fetch("https://hacker-news.firebaseio.com/v0/newstories.json")
            let result = await response.json();

            setData(result)
         }

         fetchData();
    }, [])
    return(
        <div>
            <h1>{data.length}</h1>
        </div>
    )
}
export default Main