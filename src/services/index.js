export async function getStory(storyId){
  let result = await fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`)
  return result
}

export async function getStoryIds(storyData){
    let result = await fetch(`https://hacker-news.firebaseio.com/v0/${storyData}stories.json`);
    return result
}