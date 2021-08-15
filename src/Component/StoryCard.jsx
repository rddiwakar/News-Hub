import React,{useEffect,useState} from "react"

function StoryCard({ storyId }) {
    const [story, setStory] = useState({});

    useEffect(()=>{
        let fetchData = async () =>{
            let response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`);
            let result = await response.json();
            setStory(result)
        }
        fetchData()
    }, [storyId]);

    
    function time(){
        
        let s =Date.now() -  story.time * 1000;
        let min = s / 60 / 1000;
        let hrs = min /60;
        var days = hrs / 24;
        var month = days / 30;
        var year = days / 365;
        
        if(year >= 1){
            return Math.floor(year) > 1 ? Math.floor(year) +" years" : Math.floor(year) +" year";
        }else if(month >= 1){
            return Math.floor(month) > 1 ? Math.floor(month) + " months" :Math.floor(month) +" month";
        }else if (days >=1){
            return Math.floor(days) > 1 ? Math.floor(days) + " days" : Math.floor(days) + " day";
        }else if (hrs >=1){
            return Math.floor(hrs) > 1 ? Math.floor(hrs) + " hours" : Math.floor(hrs) + " hrs";
        }else {   
                return Math.floor(min) > 1 ? Math.floor(min) + " minutes" : Math.floor(min) + " minute";
        }

        
    }
    return (
        <div className="storyCard">
            <a href={story.url}>
                <h4>{story.title}</h4>
                <p>{story.text ? story.text : "No data found"}</p>
                <p>{time()} ago | type : {story.type} | written by {story.by}</p>
            </a>
        </div>
    )
}

export default StoryCard;