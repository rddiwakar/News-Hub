import React,{useEffect,useState} from "react";
import { getStory } from "../services";
import {time} from "../utils/index"

function StoryCard({ storyId }) {
    const [story, setStory] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        let fetchData = async () =>{
            let response = await getStory(storyId);
            let result = await response.json();
            setStory(result)
            setIsLoading(false)
        }
        fetchData()
    }, [storyId]);

    
    
    return (
        <div className={`storyCard ${isLoading ? "skeleton-loader": ""}`}>
            {
                !isLoading && (
                    <a href={story.url}>
                        <h4>{story.title}</h4>
                        <p>{story.text ? story.text : "No data found"}</p>
                        <p>{time(story.time)} ago | type : {story.type} | written by {story.by}</p>
                    </a>
                )
            }
        </div>
    )
}

export default StoryCard;